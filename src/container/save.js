import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { className, style } = attributes;

	const innerBlocksProps = useInnerBlocksProps.save(
		useBlockProps.save({
			className,
		}),
	);

	return (
		<section {...blockProps} style={style}>
			<div
				{...innerBlocksProps}
				className="lucency-col lucency-container__content"
			></div>
		</section>
	);
}
