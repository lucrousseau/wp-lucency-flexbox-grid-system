import classnames from "classnames";

import { useInnerBlocksProps } from "@wordpress/block-editor";

import responsiveColumnSizes from "./responsiveColumnSizes.js";

export default function save({ attributes }) {
	const { sizes } = attributes;

	const style = {};

	const innerBlocksProps = useInnerBlocksProps.save({
		className: classnames("lucency-col", responsiveColumnSizes({ sizes })),
	});

	return <div {...innerBlocksProps} style={style} />;
}
