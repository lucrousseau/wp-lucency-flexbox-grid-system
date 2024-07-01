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
import { roundColumnWidth } from "../commons/roundColumnWidth";
import { COLUMNS } from "../abstracts/constants";
import { FLEX_CSS_PROPS } from "../abstracts/constants";

import { getDisplayPropValue } from "../commons/displayPropValue";
import { generateGridDimensions } from "../row/generateGridDimensions";

import responsiveColumnSizes from "./responsiveColumnSizes.js";

import metadata from "./block.json";

export default function Edit({ attributes, setAttributes, context, clientId }) {
	const { stylesClasses, width, height, display, cells, parentStylesClasses } =
		attributes;

	const {
		display: contextDisplay = display,
		cells: contextCells = cells,
		stylesClasses: contextParentStylesClasses = parentStylesClasses,
	} = context || {};

	const { isGrid } = getDisplayPropValue({ display: contextDisplay });
	const defaultStylesClasses = metadata?.attributes?.stylesClasses?.default;
	const colOrCellLabel = isGrid ? "Cell" : "Column";

	setAttributes({
		display: contextDisplay,
		cells: contextCells,
		parentStylesClasses: contextParentStylesClasses,
	});

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
				responsiveColumnSizes({
					display: contextDisplay,
					parentStylesClasses: contextParentStylesClasses,
					cells: contextCells,
					width,
					height,
				}),
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

			const getGenerateGridDimensions = generateGridDimensions({
				cells: contextCells,
			});

			const cellsX =
				getGenerateGridDimensions?.["--grid-template-columns"] ?? 0;
			const widthValue = width?.[size] || 0;
			const setWidhAuto = widthValue || cellsX;

			const cellY = getGenerateGridDimensions?.["--grid-template-rows"] ?? 0;
			const heightValue = height?.[size] || 0;
			const setHeightAuto = heightValue || cellY;

			const totalCols = isGrid
				? parentStylesClasses?.[size]?.variables?.["grid-template-columns"]
						?.value || cellsX
				: COLUMNS;

			const columnWidth = roundColumnWidth({
				total: totalCols,
				pourcentage: setWidhAuto,
			});
			const labelLabel = !!columnWidth
				? `${columnWidth} ${colOrCellLabel}(s) Width on ${totalCols}`
				: `Auto ${colOrCellLabel}(s) Width`;

			const customTooltipContent = () =>
				`${!columnWidth ? __("Auto", "lucency") : columnWidth}`;

			const marks = [
				{
					value: 0,
					label: __("Auto", "lucency"),
				},
				...Array.from({ length: totalCols }, (_, i) => ({
					value: (i + 1) * (100 / totalCols),
					label: (i + 1).toString(),
				})),
			];

			return (
				<>
					<div className={`lucency-col lucency-col-12`}>
						<RangeControl
							label={__(labelLabel, "lucency")}
							min={0}
							max={100}
							value={widthValue}
							marks={marks}
							withInputField={false}
							renderTooltipContent={customTooltipContent}
							onChange={(value) =>
								setAttributes({
									width: {
										...width,
										[size]: value,
									},
								})
							}
							help={__("Leave at AUTO for auto width", "lucency")}
						/>
						{isGrid && (
							<RangeControl
								label={__(`${colOrCellLabel} Height`, "lucency")}
								min={0}
								max={100}
								value={setHeightAuto}
								marks={marks}
								withInputField={false}
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
