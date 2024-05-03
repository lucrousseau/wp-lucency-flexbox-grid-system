import { useState } from "@wordpress/element";
import classnames from "classnames";
import { useSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import {
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
} from "@wordpress/block-editor";

import { PanelBody, Notice } from "@wordpress/components";

import ColumnsLength from "./ColumnsLength";

import ResponsivePanel, {
	updateStyles,
	updateClasses,
	renderControls,
} from "../commons/ResponsivePanel";

import "./editor.scss";

export default function Edit({ attributes, setAttributes, clientId }) {
	const { tag, stylesClasses, columns } = attributes;
	const Tag = tag;
	const [showNotice, setShowNotice] = useState(false);

	const hasInnerBlocks = useSelect((select) => {
		const count = select("core/block-editor").getBlockCount(clientId);
		return count > 0;
	});

	const style = updateStyles({ stylesClasses });

	const blockProps = useBlockProps({
		className: updateClasses({ stylesClasses }, classnames("lucency")),
	});

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: ["lucency-grid/column"],
		renderAppender: !hasInnerBlocks
			? () => <InnerBlocks.ButtonBlockAppender />
			: null,
	});

	const responsivePanelBefore = {
		fn: ({ size }) => {
			const controls = [
				{
					options: [
						{ label: "flex", value: "lucency-flex" },
						{ label: "inline-flex", value: "lucency-inline-flex" },
					],
					label: __("Display", "lucency"),
					prop: "display",
					type: "select",
					key: "classes",
				},
				{
					options: [
						{ label: "row", value: "lucency-flex-row" },
						{ label: "row-reverse", value: "lucency-flex-row-reverse" },
						{ label: "column", value: "lucency-flex-column" },
						{ label: "column-reverse", value: "lucency-flex-column-reverse" },
					],
					label: __("Flex Direction", "lucency"),
					prop: "flex-direction",
					type: "select",
					key: "classes",
					col: 6,
				},
				{
					options: [
						{ label: "wrap", value: "lucency-flex-wrap" },
						{ label: "wrap-reverse", value: "lucency-flex-wrap-reverse" },
						{ label: "nowrap", value: "lucency-flex-wrap-nowrap" },
					],
					label: __("Flex Wrap", "lucency"),
					prop: "flex-wrap",
					type: "select",
					key: "classes",
				},
				{
					options: [
						{ label: "normal", value: "lucency-justify-normal" },
						{ label: "flex-start", value: "lucency-justify-start" },
						{ label: "flex-end", value: "lucency-justify-end" },
						{ label: "center", value: "lucency-justify-center" },
						{ label: "between", value: "lucency-justify-between" },
						{ label: "around", value: "lucency-justify-around" },
						{ label: "evenly", value: "lucency-justify-evenly" },
						{ label: "stretch", value: "lucency-justify-stretch" },
					],
					label: __("Justify Content", "lucency"),
					prop: "justify-content",
					type: "select",
					key: "classes",
				},
				{
					options: [
						{ label: "flex-start", value: "lucency-items-start" },
						{ label: "flex-end", value: "lucency-items-end" },
						{ label: "center", value: "lucency-items-center" },
						{ label: "baseline", value: "lucency-items-baseline" },
						{ label: "stretch", value: "lucency-items-stretch" },
					],
					label: __("Align Items", "lucency"),
					prop: "align-items",
					type: "select",
					key: "classes",
				},
				{
					options: [
						{ label: "normal", value: "lucency-content-normal" },
						{ label: "center", value: "lucency-content-center" },
						{ label: "flex-start", value: "lucency-content-start" },
						{ label: "flex-end", value: "lucency-content-end" },
						{ label: "space-between", value: "lucency-content-between" },
						{ label: "space-around", value: "lucency-content-around" },
						{ label: "space-evenly", value: "lucency-content-evenly" },
						{ label: "baseline", value: "lucency-content-baseline" },
						{ label: "stretch", value: "lucency-content-stretch" },
					],
					label: __("Align Content", "lucency"),
					prop: "align-content",
					type: "select",
					key: "classes",
				},
				{
					options: [
						{ label: "left", value: "lucency-align-left" },
						{ label: "center", value: "lucency-align-center" },
						{ label: "right", value: "lucency-align-right" },
						{ label: "justify", value: "lucency-align-justify" },
					],
					label: __("Text Align", "lucency"),
					prop: "text-align",
					type: "select",
					key: "classes",
				},
				{
					label: __("Gap", "lucency"),
					prop: "gap",
					type: "number",
					key: "variables",
				},
			];

			return controls.map((props) =>
				renderControls({
					stylesClasses,
					setAttributes,
					size,
					col: 6,
					...props,
				}),
			);
		},
		title: __("Alignment", "lucency"),
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Row Settings")}>
					<ColumnsLength
						columns={columns}
						setAttributes={setAttributes}
						clientId={clientId}
						setShowNotice={setShowNotice}
					/>
					<ResponsivePanel
						stylesClasses={stylesClasses}
						setAttributes={setAttributes}
						responsivePanelBefore={responsivePanelBefore}
					/>
				</PanelBody>
			</InspectorControls>
			{showNotice && (
				<Notice status="error" isDismissible={false}>
					{__(
						"This block is intended to be used with 12 columns. Having more can lead to unexpected results.",
						"lucency",
					)}
				</Notice>
			)}
			<Tag {...innerBlocksProps} style={style}></Tag>
		</>
	);
}
