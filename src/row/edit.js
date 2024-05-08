import { useState, useEffect } from "@wordpress/element";
import classnames from "classnames";
import { useSelect } from "@wordpress/data";
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
	__experimentalNumberControl as NumberControl,
} from "@wordpress/components";

import ColumnsLength from "./ColumnsLength";

import ResponsivePanel, {
	updateStyles,
	updateClasses,
	responsivePanelControls,
} from "../commons/ResponsivePanel";

import { FLEX_CSS_PROPS } from "../abstracts/constants";

import metadata from "./block.json";

import "./editor.scss";

export default function Edit({ attributes, setAttributes, clientId }) {
	const { tag, stylesClasses, columns } = attributes;
	const Tag = tag;
	const [showNotice, setShowNotice] = useState(false);
	const [newColumns, setNewColumns] = useState(1);
	const noColumnsDefined = !columns;
	const defaultStylesClasses = metadata?.attributes?.stylesClasses?.default;

	const style = updateStyles({ stylesClasses });

	const blockProps = useBlockProps({
		className: updateClasses({ stylesClasses }, classnames("lucency")),
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

	const handleSetColumns = () => {
		setAttributes({ columns: newColumns });

		for (let i = 0; i < newColumns; i++) {
			createBlock("lucency-grid/column");
		}
	};

	useEffect(() => {
		if (columns !== innerBlocksCount && hasInnerBlocks) {
			setAttributes({ columns: innerBlocksCount });
		}
	}, [columns, hasInnerBlocks, innerBlocksCount]);

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: ["lucency-grid/column"],
		renderAppender: !hasInnerBlocks
			? () => (
					<div className="lucency-admin-row-appender">
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
						<div className="lucency">
							<div className="lucency-col lucency-col-2">
								<NumberControl
									value={newColumns}
									onChange={(value) => setNewColumns(parseInt(value))}
									min={1}
									max={12}
								/>
							</div>
							<div className="lucency-col">
								<Button isPrimary onClick={handleSetColumns}>
									{__("Add", "lucency")}
								</Button>
							</div>
						</div>
					</div>
			  )
			: null,
	});

	const responsivePanelBefore = {
		fn: ({ size }) =>
			Object.entries(FLEX_CSS_PROPS).map(([prop, props]) =>
				responsivePanelControls({
					stylesClasses,
					setAttributes,
					size,
					col: 6,
					prop,
					defaultStylesClasses,
					...props,
				}),
			),
		title: __("Alignment", "lucency"),
	};

	return (
		<>
			{!noColumnsDefined && (
				<InspectorControls>
					<PanelBody title={__("Row Settings")}>
						<ColumnsLength
							columns={columns}
							setAttributes={setAttributes}
							clientId={clientId}
							setShowNotice={setShowNotice}
							hasInnerBlocks={hasInnerBlocks}
							innerBlocksCount={innerBlocksCount}
						/>
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
						"This block is intended to be used with 12 columns. Having more can lead to unexpected results.",
						"lucency",
					)}
				</Notice>
			)}
			<Tag {...innerBlocksProps} style={style}></Tag>
		</>
	);
}
