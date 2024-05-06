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
	responsivePanelControls,
} from "../commons/ResponsivePanel";

import responsiveColumnSizes from "./responsiveColumnSizes.js";

import metadata from "./block.json";

export default function Edit({ attributes, setAttributes, clientId }) {
	const { stylesClasses, sizes } = attributes;
	const defaultStylesClasses = metadata?.attributes?.stylesClasses?.default;

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

	const responsivePanelBefore = {
		fn: ({ size }) => {
			const controls = {
				"text-align": {
					options: [
						{ label: "left", value: "lucency-align-left" },
						{ label: "center", value: "lucency-align-center" },
						{ label: "right", value: "lucency-align-right" },
						{ label: "justify", value: "lucency-align-justify" },
					],
					label: __("Text Align", "lucency"),
					type: "select",
					key: "classes",
				},
				"align-self": {
					options: [
						{ label: "auto", value: "lucency-self-auto" },
						{ label: "flex-start", value: "lucency-self-start" },
						{ label: "flex-end", value: "lucency-self-end" },
						{ label: "center", value: "lucency-self-center" },
						{ label: "stretch", value: "lucency-self-stretch" },
						{ label: "baseline", value: "lucency-self-baseline" },
					],
					label: __("Align Self", "lucency"),
					type: "select",
					key: "classes",
				},
			};
			return (
				<>
					<div className={`lucency-col lucency-col-12`}>
						<RangeControl
							label={__("Columns Width", "lucency")}
							min={0}
							max={COLUMNS}
							value={sizes?.[size] ?? 0}
							onChange={(value) => handleSizeChange({ size, sizes, value })}
							help={__("Leave at 0 for auto width", "lucency")}
						/>
					</div>
					{Object.entries(controls).map(([prop, props]) =>
						responsivePanelControls({
							stylesClasses,
							setAttributes,
							size,
							col: 6,
							prop,
							...props,
						}),
					)}
				</>
			);
		},
		title: __("Alignment", "lucency"),
	};

	return (
		<>
			<InspectorControls>
				<Notice status="warning" isDismissible={false}>
					{__(
						"Comulative column width for sleected breakpoints should not exceed 12 or row will break in another line",
						"lucency",
					)}
				</Notice>
				<PanelBody title={__("Column Settings")}>
					<ResponsivePanel
						enabled={{ padding: true }}
						stylesClasses={stylesClasses}
						setAttributes={setAttributes}
						responsivePanelBefore={responsivePanelBefore}
						defaultStylesClasses={defaultStylesClasses}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...innerBlocksProps} style={style}></div>
		</>
	);
}
