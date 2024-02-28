import classnames from "classnames";
import { useSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import {
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
} from "@wordpress/block-editor";

import { PanelBody, Notice, RangeControl } from "@wordpress/components";

import { COLUMNS, BREAKPOINTS } from "../abstracts/constants";

import Collapsible from "../commons/Collapsible";

import responsiveColumnSizes from "./responsiveColumnSizes.js";

import "./editor.scss";

export default function Edit({ attributes, setAttributes, clientId }) {
	const { sizes } = attributes;

	const style = {};

	const { hasInnerBlocks } = useSelect((select) => ({
		hasInnerBlocks: select("core/block-editor").getBlockCount(clientId) > 0,
	}));

	const blockProps = useBlockProps({
		className: classnames("col", responsiveColumnSizes({ sizes })),
	});

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		renderAppender: !hasInnerBlocks
			? () => <InnerBlocks.ButtonBlockAppender />
			: null,
	});

	const handleSizeChange = ({ size, sizes, value }) => {
		const updatedColumnSize = {
			...sizes,
			[size]: value,
		};

		setAttributes({ sizes: updatedColumnSize });
	};

	const createItems = ({ sizes, handleSizeChange }) =>
		Object.entries(BREAKPOINTS).reduce((acc, [size]) => {
			const title = `${__(size.toUpperCase(), "lucidity-flexbox-grid-system")}${
				size !== "full" ? `, ${BREAKPOINTS[size]}px` : ""
			}`;

			const content = (
				<RangeControl
					label={__("Columns Eidth", "lucidity-flexbox-grid-system")}
					min={0}
					max={COLUMNS}
					value={sizes?.[size] ?? 0}
					onChange={(value) => handleSizeChange({ size, sizes, value })}
					help={__("Leave at 0 for auto width", "lucidity-flexbox-grid-system")}
				/>
			);

			acc[size] = { title, content };
			return acc;
		}, {});

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Column Settings")}>
					<Notice status="warning" isDismissible={true}>
						{__(
							"Comulative column width for sleected breakpoints should not exceed 12 or row will break in another line",
							"lucidity-flexbox-grid-system",
						)}
					</Notice>
					<Collapsible
						items={createItems({ sizes, handleSizeChange })}
						initialOpenPanel={"full"}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...innerBlocksProps} style={style}></div>
		</>
	);
}
