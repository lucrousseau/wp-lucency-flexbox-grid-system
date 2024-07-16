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
import { fetchBlockDetails } from "../commons/fetchBlockDetails";
import { updateStylesCustomFn } from "./updateStylesCustomFn";
import { generateGridDimensionsStyles } from "./generateGridDimensions";

import ResponsivePanel, {
	updateStyles,
	updateClasses,
	responsivePanelControls,
} from "../commons/ResponsivePanel";

import ColumnAppender from "./ColumnAppender";
import ColumnAppenderPopUp from "./ColumnAppenderPopUp";

import { COLUMNS } from "../abstracts/constants";
import { FLEX_CSS_PROPS } from "../abstracts/constants";

import metadata from "./block.json";

import "./editor.scss";

export default function Edit({
	attributes,
	setAttributes,
	clientId,
	isSelected,
}) {
	const { tag, stylesClasses, columns, display } = attributes;
	const { isFlex } = getDisplayPropValue({ display });

	const Tag = tag;
	const noColumnsDefined = !columns;
	const defaultStylesClasses = metadata?.attributes?.stylesClasses?.default;

	const className = updateClasses(
		{ stylesClasses, defaultStylesClasses, params: { display } },
		classnames("lucency", `lucency-${display}`),
	);

	const blockProps = useBlockProps({ className });

	const { hasChildren, innerBlocksCount, innerBlocks } = fetchBlockDetails({
		clientId,
	});

	const showNotice = innerBlocksCount >= COLUMNS + 1 && isFlex;

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: ["lucency-grid/column"],
		renderAppender: () =>
			!hasChildren ? (
				<ColumnAppenderPopUp
					attributes={attributes}
					setAttributes={setAttributes}
					clientId={clientId}
				/>
			) : isSelected ? (
				<ColumnAppender
					innerBlocksCount={innerBlocksCount}
					clientId={clientId}
					setAttributes={setAttributes}
					display={display}
				/>
			) : null,
	});

	const style = updateStyles({
		stylesClasses,
		defaultStylesClasses,
		fn: updateStylesCustomFn,
		params: { display, innerBlocksCount },
	});

	const styleAndIfDefaultGridDimensions = generateGridDimensionsStyles({
		style,
		display,
		clientId,
		stylesClasses,
		cells: innerBlocksCount,
	});

	const responsivePanelBefore = {
		fn: ({ size }) => {
			const controls = FLEX_CSS_PROPS({ display, size });

			return Object.entries(controls).map(([prop, props]) =>
				responsivePanelControls({
					stylesClasses,
					setAttributes,
					size,
					col: 6,
					prop,
					defaultStylesClasses,
					...props,
				}),
			);
		},
		title: __("Alignment", "lucency"),
	};

	useEffect(() => {
		setAttributes({
			cells: innerBlocksCount,
			style: styleAndIfDefaultGridDimensions,
			className,
		});
	}, [innerBlocks, innerBlocksCount, className]);

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
						<ResponsivePanel
							enabled={{ margin: true, padding: true }}
							stylesClasses={stylesClasses}
							setAttributes={setAttributes}
							responsivePanelBefore={responsivePanelBefore}
							defaultStylesClasses={defaultStylesClasses}
						/>
					</PanelBody>
				</InspectorControls>
			)}
			<Tag {...innerBlocksProps} style={styleAndIfDefaultGridDimensions}>
				{showNotice && isSelected && (
					<CustomNotice status="error" isDismissible={false}>
						{__(
							`This block is intended to be used with ${COLUMNS} columns. Having more can lead to unexpected results.`,
							"lucency",
						)}
					</CustomNotice>
				)}
				{innerBlocksProps.children}
			</Tag>
		</>
	);
}
