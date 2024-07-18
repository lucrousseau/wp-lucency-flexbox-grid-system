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

import fetchBlockDetails from "../commons/fetchBlockDetails";
import roundCellDimension from "../commons/roundCellDimension";
import { COLUMNS, PANEL_CSS_PROPS } from "../abstracts/constants";
import RangeControlForColsCells from "../commons/RangeControlForColsCells";
import calculateGridLayout from "../commons/calculateGridLayout";

import getDisplayTypeFlags from "../commons/getDisplayTypeFlags";

import responsiveColumnSizes from "./responsiveColumnSizes";

import metadata from "./block.json";

export default function Edit(props) {
	const { attributes, setAttributes, context, clientId } = props;
	const { stylesClasses, width, height } = attributes;

	const {
		display,
		innerBlocksCount,
		stylesClasses: parentStylesClasses = context?.stylesClasses,
	} = context || {};

	const { isGrid } = getDisplayTypeFlags({ display });
	const colOrCellLabel = isGrid ? "Cell" : "Column";
	const defaultStylesClasses = metadata?.attributes?.stylesClasses?.default;

	const { hasInnerBlocks, parentClientId } = fetchBlockDetails({ clientId });

	const setProps = {
		display,
		innerBlocksCount,
		stylesClasses,
		parentStylesClasses,
		defaultStylesClasses,
		...props,
	};

	const style = updateStyles(setProps);

	const className = updateClasses(
		setProps,
		classnames(
			"lucency-col",
			responsiveColumnSizes({
				width,
				height,
				...setProps,
				clientId: parentClientId,
			}),
		),
	);

	const innerBlocksProps = useInnerBlocksProps(
		useBlockProps({
			className,
		}),
		{
			renderAppender: !hasInnerBlocks
				? () => <InnerBlocks.ButtonBlockAppender />
				: null,
		},
	);

	const alignmentFn = ({ size }) => {
		const { "--grid-template-columns": gridLayout = 0 } =
			calculateGridLayout({
				...setProps,
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
					<RangeControlForColsCells
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
						<RangeControlForColsCells
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
					controls: PANEL_CSS_PROPS,
					size,
					...setProps,
					display: colOrCellLabel.toLocaleLowerCase(),
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

	useEffect(() => {
		setAttributes({
			className,
			style,
			...setProps,
		});
	}, [display, innerBlocksCount, parentStylesClasses, className]);

	return (
		<>
			<InspectorControls>
				<Notice status="warning" isDismissible={false}>
					{__(
						`Comulative column width for sleected breakpoints should not exceed ${COLUMNS} or row will break in another line`,
						"lucency",
					)}
				</Notice>
				<PanelBody title={__("Responsive Settings")}>
					<ResponsivePanel {...{ responsivePanel, ...setProps }} />
				</PanelBody>
			</InspectorControls>
			<div {...innerBlocksProps} style={style}></div>
		</>
	);
}
