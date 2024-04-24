import classnames from "classnames";

import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";

import { updateStyles, updateClasses } from "../commons/ResponsivePanel";

export default function save({ attributes }) {
	const { tag, stylesClasses } = attributes;
	const Tag = tag;

	const style = updateStyles({ stylesClasses });

	const blockProps = useBlockProps.save({
		className: updateClasses({ stylesClasses }, classnames("container")),
	});

	const innerBlocksProps = useInnerBlocksProps.save(blockProps);

	return <Tag {...innerBlocksProps} style={style} />;
}
