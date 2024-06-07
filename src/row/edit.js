import { useState, createPortal } from "@wordpress/element";
import classnames from "classnames";
import { useSelect, useDispatch } from "@wordpress/data";
import { createBlock } from "@wordpress/blocks";
import { columns as icon } from "@wordpress/icons";
import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
} from "@wordpress/block-editor";

import {
	PanelBody,
	Notice,
	Button,
	SelectControl,
	__experimentalNumberControl as NumberControl,
} from "@wordpress/components";

import ColumnsLength from "./ColumnsLength";

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
	const Tag = tag;
	const noColumnsDefined = !columns;
	const defaultStylesClasses = metadata?.attributes?.stylesClasses?.default;

	const [showNotice, setShowNotice] = useState(false);
	const [columnsCount, setColumnsCount] = useState(1);
	const [rowsCount, setRowsCount] = useState(1);
	const [displayProp, setDisplayProp] = useState("flex");

	/*
	"display": "lucency-flex",
	"flex-direction": "lucency-flex-row",
	"flex-wrap": "lucency-flex-wrap"
	*/

	const isGrid = display === "grid";
	const isFlex = display === "flex";
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

	const { insertBlocks, removeBlock } = useDispatch("core/block-editor");

	const setDisplayPropValue = ({
		labelPosition = "top",
		value,
		onChange,
	} = {}) => (
		<SelectControl
			label={__("Display as", "lucency")}
			labelPosition={labelPosition}
			value={value}
			options={[
				{ label: __("Flex", "lucency"), value: "flex" },
				{ label: __("Gird", "lucency"), value: "grid" },
			]}
			onChange={onChange}
			__nextHasNoMarginBottom
		/>
	);

	const ColumnAppender = () => {
		const addNewColumn = () => {
			const block = createBlock("lucency-grid/column");
			insertBlocks(block, innerBlocksCount, clientId);
		};

		return (
			<div className="lucency-admin-row-add-column" onClick={addNewColumn}>
				<span>{__("Add a Column", "lucency")}</span>
				<span></span>
			</div>
		);
	};

	const ColumnAppenderPopUp = () => {
		const rootContainer =
			document.querySelector(".is-root-container") || document.body;

		const handleAddColumns = () => {
			setAttributes({
				columns: columnsCount,
				display: displayProp,
			});

			const blocks = [];
			for (let i = 0; i < columnsCount * rowsCount; i++) {
				const block = createBlock("lucency-grid/column");
				blocks.push(block);
			}

			insertBlocks(blocks, null, clientId);
		};

		const handleCancel = () => {
			removeBlock(clientId);
		};

		return createPortal(
			<div className="lucency-admin-row-appender">
				<div className="lucency-admin-row-appender-inner">
					<header className="lucency">
						<div className="lucency-col">
							<h3>
								{icon}
								{__("Please set the number of columns you want.", "lucency")}
							</h3>
							<p>
								{__(
									"You will be able to set column(s) width and other parameters after this step.",
									"lucency",
								)}
							</p>
						</div>
					</header>
					<div className="lucency lucency-flex">
						<div className="lucency-col">
							{setDisplayPropValue({
								onChange: (value) => setDisplayProp(value),
								labelPosition: "side",
								value: displayProp,
							})}
						</div>
						<div className="lucency-col">
							<NumberControl
								label={
									isFlex ? __("Columns", "lucency") : __("Cells", "lucency")
								}
								value={columnsCount}
								onChange={(value) => setColumnsCount(parseInt(value))}
								labelPosition="side"
								min={1}
								max={isFlex ? COLUMNS : COLUMNS * 4}
							/>
						</div>
						{isGrid && (
							<div className="lucency-col">
								<NumberControl
									label={__("Columns", "lucency")}
									value={rowsCount}
									onChange={(value) => setRowsCount(parseInt(value))}
									labelPosition="side"
									min={1}
									max={COLUMNS}
								/>
							</div>
						)}
						<div className="lucency-col">
							<Button isPrimary onClick={handleAddColumns}>
								{__("Add", "lucency")}
							</Button>
							<Button isDestructive onClick={handleCancel}>
								{__("Cancel", "lucency")}
							</Button>
						</div>
					</div>
				</div>
			</div>,
			rootContainer,
		);
	};

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: ["lucency-grid/column"],
		renderAppender: () =>
			!hasInnerBlocks ? <ColumnAppenderPopUp /> : <ColumnAppender />,
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
