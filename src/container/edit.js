import classnames from "classnames";
import { useSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import {
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
} from "@wordpress/block-editor";

import { isEmpty } from "../helpers";

import {
	MarginPadding,
	updateStyleWithMarginPadding,
} from "../commons/MarginPadding";

import "./editor.scss";

export default function Edit({ attributes, setAttributes, clientId }) {
	const { tag, background, marginPadding } = attributes;
	const Tag = tag;

	const style = updateStyleWithMarginPadding({ marginPadding });

	const { hasInnerBlocks } = useSelect((select) => ({
		hasInnerBlocks: select("core/block-editor").getBlockCount(clientId) > 0,
	}));

	const blockProps = useBlockProps({
		className: classnames("container"),
	});

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		className: classnames("container__content"),
		renderAppender: !hasInnerBlocks
			? () => <InnerBlocks.ButtonBlockAppender />
			: null,
	});

	return (
		<>
			<InspectorControls>
				<MarginPadding
					marginPadding={marginPadding}
					setAttributes={setAttributes}
				/>
			</InspectorControls>
			<Tag {...blockProps} style={style}>
				{!isEmpty(background) && (
					<div className="container__background">
						{background.src && <img src={background.src} alt="" />}
					</div>
				)}
				<div {...innerBlocksProps} />
			</Tag>
		</>
	);
}
