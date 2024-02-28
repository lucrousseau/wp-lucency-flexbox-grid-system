import classnames from "classnames";

import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";

import { updateStyleWithMarginPadding } from "../commons/MarginPadding";

export default function save({ attributes }) {
	const { tag, marginPadding } = attributes;
	const Tag = tag;

	const style = updateStyleWithMarginPadding({ marginPadding });

	const blockProps = useBlockProps.save({ className: classnames("row") });

	const innerBlocksProps = useInnerBlocksProps.save(blockProps);

	return <Tag {...innerBlocksProps} style={style} />;
}
