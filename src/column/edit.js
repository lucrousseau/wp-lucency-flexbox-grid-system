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

import { COLUMNS } from "../abstracts/constants";

import ResponsivePanel, {
	updateStyles,
	updateClasses,
} from "../commons/ResponsivePanel";

import responsiveColumnSizes from "./responsiveColumnSizes.js";

import "./editor.scss";

export default function Edit({ attributes, setAttributes, clientId }) {
	const { stylesClasses, sizes } = attributes;

	const style = updateStyles({ stylesClasses });

	const blockProps = useBlockProps({
		className: updateClasses(
			{ stylesClasses },
			classnames("lucency-col", responsiveColumnSizes({ sizes })),
		),
	});

	const { hasInnerBlocks } = useSelect((select) => ({
		hasInnerBlocks: select("core/block-editor").getBlockCount(clientId) > 0,
	}));

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

	const responsivePanelBefore = ({ size }) => (
		<>
			<div className={`lucency-col`}>
				<RangeControl
					label={__("Columns Width", "lucency")}
					min={0}
					max={COLUMNS}
					value={sizes?.[size] ?? 0}
					onChange={(value) => handleSizeChange({ size, sizes, value })}
					help={__("Leave at 0 for auto width", "lucency")}
				/>
			</div>
		</>
	);

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Column Settings")}>
					<Notice status="warning" isDismissible={true}>
						{__(
							"Comulative column width for sleected breakpoints should not exceed 12 or row will break in another line",
							"lucency",
						)}
					</Notice>
					<ResponsivePanel
						enabled={{ padding: true }}
						stylesClasses={stylesClasses}
						setAttributes={setAttributes}
						responsivePanelBefore={{
							fn: responsivePanelBefore,
							title: __("Alignment", "lucency"),
						}}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...innerBlocksProps} style={style}></div>
		</>
	);
}
