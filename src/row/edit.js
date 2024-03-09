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

import StylesClassesPanel, {
	updateStyles,
	updateClasses,
} from "../commons/StylesClassesPanel";

import "./editor.scss";

export default function Edit({ attributes, setAttributes, clientId }) {
	const { tag, marginPadding, columns } = attributes;
	const Tag = tag;
	const [showNotice, setShowNotice] = useState(false);

	const hasInnerBlocks = useSelect((select) => {
		const count = select("core/block-editor").getBlockCount(clientId);
		return count > 0;
	});

	const style = updateStyles({ marginPadding });

	const blockProps = useBlockProps({
		className: updateClasses({ marginPadding }, classnames("row")),
	});

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: ["lucidity-flexbox-grid-system/column"],
		renderAppender: !hasInnerBlocks
			? () => <InnerBlocks.ButtonBlockAppender />
			: null,
	});

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
				</PanelBody>
				<StylesClassesPanel
					marginPadding={marginPadding}
					setAttributes={setAttributes}
				/>
			</InspectorControls>
			{showNotice && (
				<Notice status="error" isDismissible={false}>
					{__(
						"This block is intended to be used with 12 columns. Having more can lead to unexpected results.",
						"lucidity-flexbox-grid-system",
					)}
				</Notice>
			)}
			<Tag {...innerBlocksProps} style={style}></Tag>
		</>
	);
}
