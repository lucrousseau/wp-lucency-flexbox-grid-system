import classnames from "classnames";

import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";

import { updateStyles, updateClasses } from "../commons/ResponsivePanel";

import metadata from "./block.json";

export default function save({ attributes }) {
	const { stylesClasses } = attributes;

	const defaultStylesClasses = metadata?.attributes?.stylesClasses?.default;

	const style = updateStyles({ stylesClasses, defaultStylesClasses });

	const blockProps = useBlockProps.save({
		className: updateClasses(
			{ stylesClasses, defaultStylesClasses },
			classnames("lucency lucency-container lucency-flex"),
		),
	});

	const innerBlocksProps = useInnerBlocksProps.save(blockProps);

	return (
		<section {...blockProps} style={style}>
			<div
				{...innerBlocksProps}
				className="lucency-col lucency-container__content"
			></div>
		</section>
	);
}
