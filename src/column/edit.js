import classnames from "classnames";
import { __ } from "@wordpress/i18n";
import { useEffect, useMemo, useCallback } from "@wordpress/element";
import {
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
} from "@wordpress/block-editor";

import { PanelBody, Notice } from "@wordpress/components";

import ResponsivePanel, {
	responsivePanelItemsProps,
} from "../commons/ResponsivePanel";
import {
	updateStyles,
	updateClasses,
} from "../commons/processStylesClassesChange";
import fetchBlockDetails from "../commons/fetchBlockDetails";
import RangeControlForColsCells from "../commons/RangeControlForColsCells";
import {
	roundColOrCellDimension,
	calculateGridLayoutStylesDimension,
} from "../commons/layout";
import getDisplayTypeFlags from "../commons/getDisplayTypeFlags";

import responsiveColumnSizes from "./responsiveColumnSizes";

import { COLUMNS, PANEL_CSS_PROPS } from "../abstracts/constants";

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

	const { hasInnerBlocks, innerBlocks, parentClientId } = fetchBlockDetails({
		clientId,
	});
	const {
		innerBlocksCount: parentInnerBlocksCount,
		innerBlocks: parentInnerBlocks,
	} = fetchBlockDetails({ clientId: parentClientId });

	const setProps = {
		display,
		innerBlocksCount,
		innerBlocks,
		stylesClasses,
		parentStylesClasses,
		defaultStylesClasses,
		...props,
	};

	const className = useMemo(
		() =>
			updateClasses(
				setProps,
				classnames(
					"lucency-col",
					responsiveColumnSizes({
						width,
						height,
						...setProps,
						clientId: parentClientId,
						innerBlocks: parentInnerBlocks,
						innerBlocksCount: parentInnerBlocksCount,
					}),
				),
			),
		[
			width,
			height,
			setProps,
			parentClientId,
			parentInnerBlocks,
			parentInnerBlocksCount,
		],
	);

	const style = useMemo(() => updateStyles(setProps), [setProps]);

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

	const alignmentFn = useCallback(
		({ size }) => {
			const { "--grid-template-columns": gridLayout = 0 } =
				calculateGridLayoutStylesDimension({
					...setProps,
					clientId: parentClientId,
					innerBlocks: parentInnerBlocks,
					innerBlocksCount: parentInnerBlocksCount,
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
						roundColOrCellDimension({
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
		},
		[
			width,
			height,
			isGrid,
			parentStylesClasses,
			setAttributes,
			setProps,
			parentClientId,
			parentInnerBlocks,
			parentInnerBlocksCount,
			colOrCellLabel,
		],
	);

	const responsivePanel = useMemo(
		() => [
			{
				fn: alignmentFn,
				title: __("Alignment", "lucency"),
			},
		],
		[alignmentFn],
	);

	useEffect(() => {
		setAttributes({
			className,
			style,
			...setProps,
		});
	}, [innerBlocks, className]);

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
