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

import ResponsivePanel, {
	updateStyles,
	updateClasses,
	responsivePanelControls,
} from "../commons/ResponsivePanel";

import { getInnerBlocksCount } from "../commons/getInnerBlocksCount";

import { COLUMNS } from "../abstracts/constants";
import { FLEX_CSS_PROPS } from "../abstracts/constants";

import { getDisplayPropValue } from "../commons/displayPropValue";

import responsiveColumnSizes from "./responsiveColumnSizes.js";

import metadata from "./block.json";

export default function Edit({ attributes, setAttributes, context, clientId }) {
	const { stylesClasses, width, height, display } = attributes;
	const contextDisplay = context?.display;
	const { isGrid, isFlex } = getDisplayPropValue({ display: contextDisplay });
	const defaultStylesClasses = metadata?.attributes?.stylesClasses?.default;
	const colOrCellLabel = isGrid ? "Cell" : "Column";

	setAttributes({ display: contextDisplay });

	const style = updateStyles({
		stylesClasses,
		defaultStylesClasses,
		params: { display },
	});

	const blockProps = useBlockProps({
		className: updateClasses(
			{ stylesClasses, defaultStylesClasses, params: { display } },
			classnames(
				"lucency-col",
				responsiveColumnSizes({ display: contextDisplay, width, height }),
			),
		),
	});

	const { hasInnerBlocks } = getInnerBlocksCount({ clientId });

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		renderAppender: !hasInnerBlocks
			? () => <InnerBlocks.ButtonBlockAppender />
			: null,
	});

	const responsivePanelBefore = {
		fn: ({ size }) => {
			const controls = FLEX_CSS_PROPS({
				display: colOrCellLabel.toLocaleLowerCase(),
			});

			return (
				<>
					<div className={`lucency-col lucency-col-12`}>
						<RangeControl
							label={__(`${colOrCellLabel} Width`, "lucency")}
							min={0}
							max={COLUMNS}
							value={width?.[size] ?? 0}
							onChange={(value) =>
								setAttributes({
									width: {
										...width,
										[size]: value,
									},
								})
							}
							help={__("Leave at 0 for auto width", "lucency")}
						/>
						{isGrid && (
							<RangeControl
								label={__(`${colOrCellLabel} Height`, "lucency")}
								min={0}
								max={COLUMNS}
								value={height?.[size] ?? 0}
								onChange={(value) =>
									setAttributes({
										height: {
											...height,
											[size]: value,
										},
									})
								}
								help={__("Leave at 0 for auto height", "lucency")}
							/>
						)}
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
				<PanelBody title={__("Responsive Settings")}>
					<ResponsivePanel
						enabled={{ margin: true, padding: true }}
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
