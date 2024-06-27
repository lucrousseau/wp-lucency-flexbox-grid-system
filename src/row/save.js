import classnames from "classnames";

import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";

import { updateStyles, updateClasses } from "../commons/ResponsivePanel";
import { updateStylesCustomFn } from "./updateStylesCustomFn";
import { generateGridDimensionsStyles } from "./generateGridDimensions";

import metadata from "./block.json";

export default function save({ attributes }) {
	const { columns, cells, tag, stylesClasses, display } = attributes;
	const Tag = tag;
	const defaultStylesClasses = metadata?.attributes?.stylesClasses?.default;

	const style = updateStyles({
		stylesClasses,
		defaultStylesClasses,
		fn: updateStylesCustomFn,
		params: { display, innerBlocksCount: columns },
	});

	const styleAndIfDefaultGridDimensions = generateGridDimensionsStyles({
		style,
		display,
		stylesClasses,
		cells,
	});

	const blockProps = useBlockProps.save({
		className: updateClasses(
			{ stylesClasses, defaultStylesClasses, params: { display } },
			classnames("lucency", `lucency-${display}`),
		),
	});

	const innerBlocksProps = useInnerBlocksProps.save(blockProps);

	console.log({ style, styleAndIfDefaultGridDimensions, innerBlocksProps });

	return <Tag {...innerBlocksProps} style={styleAndIfDefaultGridDimensions} />;
}
