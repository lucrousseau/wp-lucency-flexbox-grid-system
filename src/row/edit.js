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
	responsivePanelControls,
} from "../commons/ResponsivePanel";

import { FLEX_CSS_PROPS } from "../abstracts/constants";

import metadata from "./block.json";

import "./editor.scss";

export default function Edit({ attributes, setAttributes, clientId }) {
	const { tag, stylesClasses, columns } = attributes;
	const Tag = tag;
	const [showNotice, setShowNotice] = useState(false);
	const defaultStylesClasses = metadata?.attributes?.stylesClasses?.default;

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
						defaultStylesClasses={defaultStylesClasses}
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
