import classnames from "classnames";

import { useInnerBlocksProps } from "@wordpress/block-editor";

import { updateStyles, updateClasses } from "../commons/ResponsivePanel";

import responsiveColumnSizes from "./responsiveColumnSizes.js";

export default function save({ attributes }) {
	const { width, height, stylesClasses, display } = attributes;

	const style = updateStyles({ stylesClasses });

	const innerBlocksProps = useInnerBlocksProps.save({
		className: updateClasses(
			{ stylesClasses },
			classnames(
				"lucency-col",
				responsiveColumnSizes({ display, width, height }),
			),
		),
	});

	return <div {...innerBlocksProps} style={style} />;
}
