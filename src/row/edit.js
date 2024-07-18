import classnames from "classnames";
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";

import GridOrFlexSelector from "../commons/GridOrFlexSelector";
import getDisplayTypeFlags from "../commons/getDisplayTypeFlags";
import CustomNotice from "../commons/CustomNotice";
import fetchBlockDetails from "../commons/fetchBlockDetails";
import { applyLayoutStyles } from "../commons/layout";
import ResponsivePanel, {
	responsivePanelItemsProps,
} from "../commons/ResponsivePanel";
import {
	updateStyles,
	updateClasses,
} from "../commons/processStylesClassesChange";

import ColumnAppender from "./ColumnAppender";
import ColumnAppenderPopUp from "./ColumnAppenderPopUp";

import { COLUMNS, PANEL_CSS_PROPS } from "../abstracts/constants";

import metadata from "./block.json";

import "./editor.scss";

export default function Edit(props) {
	const { attributes, setAttributes, clientId, isSelected } = props;
	const { stylesClasses, columns, display } = attributes;

	const noColumnsDefined = !columns;
	const { isFlex } = getDisplayTypeFlags({ display });
	const defaultStylesClasses = metadata?.attributes?.stylesClasses?.default;

	const { hasInnerBlocks, innerBlocksCount, innerBlocks } = fetchBlockDetails({
		clientId,
	});

	const setProps = {
		display,
		innerBlocks,
		innerBlocksCount,
		stylesClasses,
		defaultStylesClasses,
		...props,
	};

	const className = updateClasses(
		setProps,
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

	const updateStylesCustomFn = ({
		result,
		prefix,
		prop,
		value,
		unit,
		display,
		innerBlocksCount,
	}) => {
		if (prop === "grid-template-columns") {
			if (display !== "grid") return true;

			result[`--grid-template-rows${prefix}`] = `${
				COLUMNS / Math.ceil(innerBlocksCount / value)
			}${unit}`;
		}
	};

	const style = updateStyles({
		fn: updateStylesCustomFn,
		...setProps,
	});

	const styleAndIfDefaultGridDimensions = applyLayoutStyles({
		style,
		...setProps,
	});

	const responsivePanel = [
		{
			fn: ({ size }) =>
				responsivePanelItemsProps({
					controls: PANEL_CSS_PROPS,
					size,
					...setProps,
				}),
			title: __("Alignment", "lucency"),
		},
	];

	useEffect(() => {
		setAttributes({
			innerBlocksCount,
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
						{GridOrFlexSelector({
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
