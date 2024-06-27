import classnames from "classnames";

import { useInnerBlocksProps } from "@wordpress/block-editor";

import { updateStyles, updateClasses } from "../commons/ResponsivePanel";

import responsiveColumnSizes from "./responsiveColumnSizes.js";

import metadata from "./block.json";

export default function save({ attributes }) {
	const { width, height, stylesClasses, display, cells, parentStylesClasses } =
		attributes;
	const defaultStylesClasses = metadata?.attributes?.stylesClasses?.default;

	const style = updateStyles({
		stylesClasses,
		defaultStylesClasses,
		params: { display },
	});

	const innerBlocksProps = useInnerBlocksProps.save({
		className: updateClasses(
			{ stylesClasses, defaultStylesClasses, params: { display } },
			classnames(
				"lucency-col",
				responsiveColumnSizes({
					display,
					cells,
					parentStylesClasses,
					width,
					height,
				}),
			),
		),
	});

	return <div {...innerBlocksProps} style={style} />;
}
