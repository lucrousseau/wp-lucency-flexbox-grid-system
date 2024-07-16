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
	responsivePanelControls,
} from "../commons/ResponsivePanel";

import { fetchRowBlockDetails } from "../row/fetchRowBlockDetails";
import { roundCellDimension } from "../commons/roundCellDimension";
import { COLUMNS } from "../abstracts/constants";
import { FLEX_CSS_PROPS } from "../abstracts/constants";
import CustomRangeControlForCells from "./CustomRangeControlForCells";

import { getDisplayPropValue } from "../commons/displayPropValue";
import { generateLayoutStyles } from "../row/generateLayoutStyles";

import responsiveColumnSizes from "./responsiveColumnSizes";

export default function Edit({ attributes, setAttributes, clientId }) {
	const { stylesClasses, width, height } = attributes;

	const { hasChildren, parentRowClientId, childrenCount, blockAttributes } =
		fetchRowBlockDetails({
			clientId,
		});

	const { display, stylesClasses: parentStylesClasses } = blockAttributes;
	const { isGrid } = getDisplayPropValue({ display });

	const style = updateStyles({
		clientId,
		params: { display },
	});

	const className = updateClasses(
		{ clientId, params: { display } },
		classnames(
			"lucency-col",
			responsiveColumnSizes({
				display,
				parentStylesClasses,
				cells: childrenCount,
				width,
				height,
				clientId: parentRowClientId,
			}),
		),
	);

	const blockProps = useBlockProps({
		className,
	});

	useEffect(() => {
		setAttributes({
			className,
			style,
		});
	}, [className]);

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		renderAppender: !hasChildren
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
				generateLayoutStyles({
					clientId: parentRowClientId,
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
					{Object.entries(controls).map(([prop, props]) =>
						responsivePanelControls({
							clientId,
							attributes,
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
						clientId={clientId}
						enabled={{ margin: true, padding: true }}
						setAttributes={setAttributes}
						responsivePanelBefore={responsivePanelBefore}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...innerBlocksProps} style={style}></div>
		</>
	);
}
