import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { className, style } = attributes;

	const innerBlocksProps = useInnerBlocksProps.save(
		useBlockProps.save({
			className,
		}),
	);

	return <div {...innerBlocksProps} style={style} />;
}
