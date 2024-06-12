import { useState } from "@wordpress/element";
import classnames from "classnames";
import { useSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
} from "@wordpress/block-editor";

import { PanelBody, Notice } from "@wordpress/components";

import {
	setDisplayPropValue,
	getDisplayPropValue,
} from "../commons/displayPropValue";

import { getInnerBlocksCount } from "../commons/getInnerBlocksCount";
import { updateStylesCustomFn } from "./updateStylesCustomFn";

import ResponsivePanel, {
	updateStyles,
	updateClasses,
	responsivePanelControls,
} from "../commons/ResponsivePanel";

import ColumnsLength from "./ColumnsLength";
import ColumnAppender from "./ColumnAppender";
import ColumnAppenderPopUp from "./ColumnAppenderPopUp";

import { COLUMNS } from "../abstracts/constants";
import { FLEX_CSS_PROPS } from "../abstracts/constants";

import metadata from "./block.json";

import "./editor.scss";

export default function Edit({ attributes, setAttributes, clientId }) {
	const { tag, stylesClasses, columns, display } = attributes;
	const { isFlex } = getDisplayPropValue({ display });

	const Tag = tag;
	const noColumnsDefined = !columns;
	const defaultStylesClasses = metadata?.attributes?.stylesClasses?.default;

	/*
	"display": "lucency-flex",
	"flex-direction": "lucency-flex-row",
	"flex-wrap": "lucency-flex-wrap"
	*/

	const blockProps = useBlockProps({
		className: updateClasses(
			{ stylesClasses },
			classnames("lucency", `lucency-${display}`),
		),
	});

	const { hasInnerBlocks, innerBlocksCount } = getInnerBlocksCount({
		clientId,
	});

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: ["lucency-grid/column"],
		renderAppender: () =>
			!hasInnerBlocks ? (
				<ColumnAppenderPopUp
					attributes={attributes}
					setAttributes={setAttributes}
					clientId={clientId}
				/>
			) : (
				<ColumnAppender
					innerBlocksCount={innerBlocksCount}
					clientId={clientId}
					setAttributes={setAttributes}
					display={display}
				/>
			),
	});

	const showNotice = innerBlocksCount >= COLUMNS + 1 && isFlex;

	const style = updateStyles({
		stylesClasses,
		fn: updateStylesCustomFn,
		params: { display, innerBlocksCount },
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

	return (
		<>
			{!noColumnsDefined && (
				<InspectorControls>
					<PanelBody title={__("Layout Settings", "lucency")}>
						{setDisplayPropValue({
							onChange: (value) => setAttributes({ display: value }),
							value: display,
						})}
						{/*
						<ColumnsLength
							columns={columns}
							display={display}
							setAttributes={setAttributes}
							clientId={clientId}
							setShowNotice={setShowNotice}
							hasInnerBlocks={hasInnerBlocks}
							innerBlocksCount={innerBlocksCount}
						/>
						*/}
					</PanelBody>
					<PanelBody title={__("Responsive Settings", "lucency")}>
						<ResponsivePanel
							enabled={{ margin: true }}
							stylesClasses={stylesClasses}
							setAttributes={setAttributes}
							responsivePanelBefore={responsivePanelBefore}
							defaultStylesClasses={defaultStylesClasses}
						/>
					</PanelBody>
				</InspectorControls>
			)}
			{showNotice && (
				<Notice status="error" isDismissible={false}>
					{__(
						`This block is intended to be used with ${COLUMNS} columns. Having more can lead to unexpected results.`,
						"lucency",
					)}
				</Notice>
			)}
			<Tag {...innerBlocksProps} style={style}></Tag>
		</>
	);
}
