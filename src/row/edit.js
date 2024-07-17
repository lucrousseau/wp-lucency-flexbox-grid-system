import classnames from "classnames";
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
} from "@wordpress/block-editor";

import { PanelBody } from "@wordpress/components";

import {
	setDisplayPropValue,
	getDisplayPropValue,
} from "../commons/displayPropValue";

import CustomNotice from "../commons/CustomNotice";
import { getInnerBlocksCount } from "../commons/getInnerBlocksCount";
import { updateStylesCustomFn } from "./updateStylesCustomFn";
import { generateGridDimensionsStyles } from "./generateGridDimensions";

import ResponsivePanel, {
	updateStyles,
	updateClasses,
	responsivePanelItemsProps,
} from "../commons/ResponsivePanel";

import ColumnAppender from "./ColumnAppender";
import ColumnAppenderPopUp from "./ColumnAppenderPopUp";

import { COLUMNS, PANEL_CSS_PROPS } from "../abstracts/constants";

import metadata from "./block.json";

import "./editor.scss";

export default function Edit(props) {
	const { attributes, setAttributes, clientId, isSelected } = props;
	const { stylesClasses, columns, display } = attributes;

	const noColumnsDefined = !columns;
	const { isFlex } = getDisplayPropValue({ display });
	const defaultStylesClasses = metadata?.attributes?.stylesClasses?.default;

	const { hasInnerBlocks, innerBlocksCount, innerBlocks } = getInnerBlocksCount(
		{ clientId },
	);

	const setProps = {
		display,
		innerBlocksCount,
		stylesClasses,
		defaultStylesClasses,
		...props,
	};

	const className = updateClasses(
		{ params: { display }, ...setProps },
		classnames("lucency", `lucency-${display}`),
	);

	const innerBlocksProps = useInnerBlocksProps(useBlockProps({ className }), {
		allowedBlocks: ["lucency-grid/column"],
		renderAppender: () =>
			!hasInnerBlocks ? (
				<ColumnAppenderPopUp {...setProps} />
			) : isSelected ? (
				<ColumnAppender {...setProps} />
			) : null,
	});

	const style = updateStyles({
		fn: updateStylesCustomFn,
		params: { display, innerBlocksCount },
		...setProps,
	});

	const styleAndIfDefaultGridDimensions = generateGridDimensionsStyles({
		style,
		...setProps,
	});

	const responsivePanel = [
		{
			fn: ({ size }) =>
				responsivePanelItemsProps({
					panelProps: PANEL_CSS_PROPS,
					size,
					...setProps,
				}),
			title: __("Alignment", "lucency"),
		},
	];

	useEffect(() => {
		setAttributes({
			innerBlocksCount: innerBlocksCount,
			style: styleAndIfDefaultGridDimensions,
			className,
		});
	}, [innerBlocks, innerBlocksCount, className]);

	const showNotice = innerBlocksCount >= COLUMNS + 1 && isFlex;

	return (
		<>
			{!noColumnsDefined && (
				<InspectorControls>
					<PanelBody title={__("Layout Settings", "lucency")}>
						{setDisplayPropValue({
							onChange: (value) => setAttributes({ display: value }),
							value: display,
						})}
					</PanelBody>
					<PanelBody title={__("Responsive Settings", "lucency")}>
						<ResponsivePanel {...{ responsivePanel, ...setProps }} />
					</PanelBody>
				</InspectorControls>
			)}
			<div {...innerBlocksProps} style={styleAndIfDefaultGridDimensions}>
				{showNotice && isSelected && (
					<CustomNotice status="error" isDismissible={false}>
						{__(
							`This block is intended to be used with ${COLUMNS} columns. Having more can lead to unexpected results.`,
							"lucency",
						)}
					</CustomNotice>
				)}
				{innerBlocksProps?.children}
			</div>
		</>
	);
}
