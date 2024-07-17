import classnames from "classnames";
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import {
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
} from "@wordpress/block-editor";

import { PanelBody, Notice } from "@wordpress/components";

import ResponsivePanel, {
	updateStyles,
	updateClasses,
	responsivePanelItemsProps,
} from "../commons/ResponsivePanel";

import { getInnerBlocksCount } from "../commons/getInnerBlocksCount";
import { roundCellDimension } from "../commons/roundCellDimension";
import { COLUMNS } from "../abstracts/constants";
import { PANEL_CSS_PROPS } from "../abstracts/constants";
import CustomRangeControlForCells from "./CustomRangeControlForCells";

import { getDisplayPropValue } from "../commons/displayPropValue";
import { generateGridDimensions } from "../row/generateGridDimensions";

import responsiveColumnSizes from "./responsiveColumnSizes";

import metadata from "./block.json";

export default function Edit({ attributes, setAttributes, context, clientId }) {
	const {
		stylesClasses,
		width,
		height,
		display,
		innerBlocksCount,
		parentStylesClasses,
	} = attributes;

	const {
		display: contextDisplay = display,
		innerBlocksCount: contextInnerBlocksCount = innerBlocksCount,
		stylesClasses: contextParentStylesClasses = parentStylesClasses,
	} = context || {};

	const { isGrid } = getDisplayPropValue({ display: contextDisplay });
	const defaultStylesClasses = metadata?.attributes?.stylesClasses?.default;

	const { hasInnerBlocks, parentClientId } = getInnerBlocksCount({ clientId });

	const style = updateStyles({
		stylesClasses,
		defaultStylesClasses,
		params: { display },
	});

	const className = updateClasses(
		{ stylesClasses, defaultStylesClasses, params: { display } },
		classnames(
			"lucency-col",
			responsiveColumnSizes({
				display: contextDisplay,
				parentStylesClasses: contextParentStylesClasses,
				innerBlocksCount: contextInnerBlocksCount,
				width,
				height,
				clientId: parentClientId,
			}),
		),
	);

	const blockProps = useBlockProps({
		className,
	});

	useEffect(() => {
		setAttributes({
			display: contextDisplay,
			innerBlocksCount: contextInnerBlocksCount,
			parentStylesClasses: contextParentStylesClasses,
			className,
			style,
		});
	}, [
		contextDisplay,
		contextInnerBlocksCount,
		contextParentStylesClasses,
		className,
	]);

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		renderAppender: !hasInnerBlocks
			? () => <InnerBlocks.ButtonBlockAppender />
			: null,
	});

	const alignmentFn = ({ size }) => {
		const colOrCellLabel = isGrid ? "Cell" : "Column";

		const { "--grid-template-columns": gridLayout = 0 } =
			generateGridDimensions({
				innerBlocksCount: contextInnerBlocksCount,
				clientId: parentClientId,
			}) ?? {};

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

		return (
			<>
				<div className={`lucency-col lucency-col-12`}>
					<CustomRangeControlForCells
						label={__("Width", "lucency")}
						value={widthValue}
						columns={columnWidth}
						totalCells={totalCells}
						colOrCellLabel={colOrCellLabel}
						onChange={(value) =>
							setAttributes({
								width: {
									...width,
									[size]: value,
								},
							})
						}
					/>
					{isGrid && (
						<CustomRangeControlForCells
							label={__("Height", "lucency")}
							value={heightValue}
							columns={columnHeight}
							totalCells={totalCells}
							colOrCellLabel={colOrCellLabel}
							onChange={(value) =>
								setAttributes({
									height: {
										...height,
										[size]: value,
									},
								})
							}
						/>
					)}
				</div>
				{responsivePanelItemsProps({
					panelProps: PANEL_CSS_PROPS,
					display,
					size,
					stylesClasses,
					setAttributes,
					defaultStylesClasses,
				})}
			</>
		);
	};

	const responsivePanel = [
		{
			fn: alignmentFn,
			title: __("Alignment", "lucency"),
		},
	];

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
						stylesClasses={stylesClasses}
						setAttributes={setAttributes}
						defaultStylesClasses={defaultStylesClasses}
						responsivePanel={responsivePanel}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...innerBlocksProps} style={style}></div>
		</>
	);
}
