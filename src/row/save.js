import classnames from "classnames";

import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";

import { updateStyles, updateClasses } from "../commons/ResponsivePanel";
import { updateStylesCustomFn } from "./updateStylesCustomFn";

import metadata from "./block.json";

export default function save({ attributes }) {
	const { columns, tag, stylesClasses, display } = attributes;
	const Tag = tag;
	const defaultStylesClasses = metadata?.attributes?.stylesClasses?.default;

	const style = updateStyles({
		stylesClasses,
		defaultStylesClasses,
		fn: updateStylesCustomFn,
		params: { display, innerBlocksCount: columns },
	});

	const blockProps = useBlockProps.save({
		className: updateClasses(
			{ stylesClasses, defaultStylesClasses },
			classnames("lucency", `lucency-${display}`),
		),
	});

	const innerBlocksProps = useInnerBlocksProps.save(blockProps);

	return <Tag {...innerBlocksProps} style={style} />;
}
