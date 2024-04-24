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

import {
	SelectControl,
	__experimentalNumberControl as NumberControl,
	PanelBody,
	Notice,
} from "@wordpress/components";

import Collapsible from "../commons/Collapsible";
import createCollapsibleItems from "../commons/StylesClassesPanel/createCollapsibleItems";

import ColumnsLength from "./ColumnsLength";

import {
	updateStyles,
	updateClasses,
	handleChange,
} from "../commons/StylesClassesPanel";

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

	const renderControl = ({
		stylesClasses,
		options,
		label,
		prop,
		size,
		col = 6,
	}) => {
		const renderSelectControl = () => (
			<div className={`lucency-col lucency-col-${col}`}>
				<SelectControl
					label={label}
					value={stylesClasses?.[size]?.classes?.[prop]}
					options={[...[{ label: "", value: null }], ...options]}
					onChange={(value) =>
						handleChange({
							size,
							prop,
							value,
							key: "classes",
							stylesClasses,
							setAttributes,
						})
					}
					__nextHasNoMarginBottom
				/>
			</div>
		);

		const renderNumberControl = () => (
			<div className={`lucency-col lucency-col-${col}`}>
				<NumberControl
					label={label}
					value={stylesClasses?.[size]?.variables?.[prop] ?? null}
					onChange={(value) =>
						handleChange({
							size,
							prop,
							value,
							key: "variables",
							stylesClasses,
							setAttributes,
						})
					}
					step={0.1}
					isShiftStepEnabled={true}
					shiftStep={10}
				/>
			</div>
		);

		return options ? renderSelectControl() : renderNumberControl();
	};

	const createCollapsibleItemsContentAlignements = ({ size }) => {
		const controls = [
			{
				options: [
					{ label: "flex", value: "lucency-flex" },
					{ label: "inline-flex", value: "lucency-inline-flex" },
				],
				label: "Display",
				prop: "display",
			},
			{
				options: [
					{ label: "row", value: "lucency-flex-row" },
					{ label: "row-reverse", value: "lucency-flex-row-reverse" },
					{ label: "column", value: "lucency-flex-column" },
					{ label: "column-reverse", value: "lucency-flex-column-reverse" },
				],
				label: "Flex Direction",
				prop: "flex-direction",
			},
			{
				options: [
					{ label: "wrap", value: "lucency-flex-wrap" },
					{ label: "wrap-reverse", value: "lucency-flex-wrap-reverse" },
					{ label: "nowrap", value: "lucency-flex-wrap-nowrap" },
				],
				label: "Flex Wrap",
				prop: "flex-wrap",
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
				label: "Justify Content",
				prop: "justify-content",
			},
			{
				options: [
					{ label: "flex-start", value: "lucency-items-start" },
					{ label: "flex-end", value: "lucency-items-end" },
					{ label: "center", value: "lucency-items-center" },
					{ label: "baseline", value: "lucency-items-baseline" },
					{ label: "stretch", value: "lucency-items-stretch" },
				],
				label: "Align Items",
				prop: "align-items",
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
				label: "Align Content",
				prop: "align-content",
			},
			{
				options: [
					{ label: "left", value: "lucency-align-left" },
					{ label: "center", value: "lucency-align-center" },
					{ label: "right", value: "lucency-align-right" },
					{ label: "justify", value: "lucency-align-justify" },
				],
				label: "Text Align",
				prop: "text-align",
			},
			{
				label: "Gap",
				prop: "gap",
			},
		];

		return (
			<>
				{controls.map(({ options, label, prop }) =>
					renderControl({
						stylesClasses,
						options,
						label,
						prop,
						size,
						col: 6,
					}),
				)}
			</>
		);
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
					<Collapsible
						items={createCollapsibleItems({
							stylesClasses,
							setAttributes,
							createCollapsibleItemsContentAlignements,
						})}
						initialOpenPanel={"full"}
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
