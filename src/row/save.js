import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { tag, className, style } = attributes;
	const Tag = tag;

	const innerBlocksProps = useInnerBlocksProps.save(
		useBlockProps.save({
			className,
		}),
	);

	return <Tag {...innerBlocksProps} style={style} />;
}
