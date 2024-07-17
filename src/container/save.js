import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { className, style } = attributes;

	const blockProps = useBlockProps.save({
		className,
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
