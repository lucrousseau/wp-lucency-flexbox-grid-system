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
import { roundCellDimension } from "../commons/roundCellDimension";
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
			const colOrCellLabel = isGrid ? "Cell" : "Column";

			const controls = FLEX_CSS_PROPS({
				display: colOrCellLabel.toLocaleLowerCase(),
			});

			const { "--grid-template-columns": gridLayout = 0 } =
				generateGridDimensions({ cells: contextCells }) ?? {};

			const widthValue = width?.[size] || 0;
			const setWidhAuto = widthValue || gridLayout;

			const heightValue = height?.[size] || 0;
			const setHeightAuto = heightValue || gridLayout;

			const totalCells = isGrid
				? parentStylesClasses?.[size]?.variables?.["grid-template-columns"]
						?.value || gridLayout
				: COLUMNS;

			const { columnWidth, columnHeight } = (() => {
				const [columnWidth, columnHeight] = [setWidhAuto, setHeightAuto].map(
					(value) =>
						roundCellDimension({
							total: totalCells,
							pourcentage: value,
						}),
				);

				return { columnWidth, columnHeight };
			})();

			const generateLabels = ({ value, label }) =>
				value && value !== 0
					? `${value} ${colOrCellLabel}(s) ${label} on ${totalCells}`
					: `Auto ${colOrCellLabel}(s) ${label}`;

			const customTooltipContent = ({ value }) =>
				`${!value ? __("Auto", "lucency") : value}`;

			const marks = [
				{
					value: 0,
					label: __("Auto", "lucency"),
				},
				...Array.from({ length: totalCells }, (_, i) => ({
					value: (i + 1) * (100 / totalCells),
					label: (i + 1).toString(),
				})),
			];

			return (
				<>
					<div className={`lucency-col lucency-col-12`}>
						<RangeControl
							label={__(
								generateLabels({ value: columnWidth, label: "Width" }),
								"lucency",
							)}
							min={0}
							max={100}
							value={widthValue}
							marks={marks}
							withInputField={false}
							renderTooltipContent={() =>
								customTooltipContent({ value: columnWidth })
							}
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
								label={__(
									generateLabels({ value: columnHeight, label: "Height" }),
									"lucency",
								)}
								min={0}
								max={100}
								value={heightValue}
								marks={marks}
								withInputField={false}
								renderTooltipContent={() =>
									customTooltipContent({ value: columnHeight })
								}
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
