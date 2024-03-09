import classnames from "classnames";

import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";

import { updateStyles, updateClasses } from "../commons/StylesClassesPanel";

export default function save({ attributes }) {
	const { tag, marginPadding } = attributes;
	const Tag = tag;

	const style = updateStyles({ marginPadding });

	const blockProps = useBlockProps.save({
		className: updateClasses({ marginPadding }, classnames("container")),
	});

	const innerBlocksProps = useInnerBlocksProps.save(blockProps);

	return <Tag {...innerBlocksProps} style={style} />;
}
