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

import ColumnsLength from "./ColumnsLength";
import ColumnAppender from "./ColumnAppender";
import ColumnAppenderPopUp from "./ColumnAppenderPopUp";

import ResponsivePanel, {
	updateStyles,
	updateClasses,
	responsivePanelControls,
} from "../commons/ResponsivePanel";

import { COLUMNS } from "../abstracts/constants";
import { FLEX_CSS_PROPS } from "../abstracts/constants";

import metadata from "./block.json";

import "./editor.scss";

export default function Edit({ attributes, setAttributes, clientId }) {
	const { tag, stylesClasses, columns, display } = attributes;
	const { isGrid } = getDisplayPropValue({ display });

	const Tag = tag;
	const noColumnsDefined = !columns;
	const defaultStylesClasses = metadata?.attributes?.stylesClasses?.default;

	const [showNotice, setShowNotice] = useState(false);

	/*
	"display": "lucency-flex",
	"flex-direction": "lucency-flex-row",
	"flex-wrap": "lucency-flex-wrap"
	*/

	const style = updateStyles({ stylesClasses });

	const blockProps = useBlockProps({
		className: updateClasses(
			{ stylesClasses },
			classnames("lucency", `lucency-${display}`),
		),
	});

	const { hasInnerBlocks, innerBlocksCount } = useSelect(
		(select) => {
			const count = select("core/block-editor").getBlockCount(clientId);

			return {
				hasInnerBlocks: count > 0,
				innerBlocksCount: count,
			};
		},
		[clientId],
	);

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
					display={display}
				/>
			),
	});

	const responsivePanelBefore = {
		fn: ({ size }) => {
			const controls = {
				...(isGrid
					? {
							cols: {
								min: 0,
								max: COLUMNS,
								col: COLUMNS,
								setDefault: size === "full" ? Math.ceil(columns / 2) : 0,
								label: __("Columns per Grid", "lucency"),
								type: "range",
								key: "variables",
							},
					  }
					: {}),
				...FLEX_CSS_PROPS({ display }),
			};

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
						<ColumnsLength
							columns={columns}
							display={display}
							setAttributes={setAttributes}
							clientId={clientId}
							setShowNotice={setShowNotice}
							hasInnerBlocks={hasInnerBlocks}
							innerBlocksCount={innerBlocksCount}
						/>
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
