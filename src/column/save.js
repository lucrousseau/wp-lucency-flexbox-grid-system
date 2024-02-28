import classnames from "classnames";

import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";

import responsiveColumnSizes from "./responsiveColumnSizes.js";

export default function save({ attributes }) {
	const { sizes } = attributes;

	const style = {};

	const blockProps = useBlockProps.save({
		className: classnames("col", responsiveColumnSizes({ sizes })),
	});

	const innerBlocksProps = useInnerBlocksProps.save(blockProps);

	return <div {...innerBlocksProps} style={style} />;
}
