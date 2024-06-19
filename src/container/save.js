import classnames from "classnames";

import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";

import { updateStyles, updateClasses } from "../commons/ResponsivePanel";

export default function save({ attributes }) {
	const { stylesClasses } = attributes;

	const style = updateStyles({ stylesClasses });

	const blockProps = useBlockProps.save({
		className: updateClasses(
			{ stylesClasses },
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
