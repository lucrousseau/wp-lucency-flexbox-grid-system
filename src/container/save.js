import classnames from "classnames";

import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	if (1 === 1) return null;

	const { tag, background, marginPadding } = attributes;
	const Tag = tag;

	const style = {};

	const blockProps = useBlockProps.save({ className: classnames("container") });

	const innerBlocksProps = useInnerBlocksProps.save(blockProps);

	return (
		<Tag {...blockProps} style={style}>
			{background && (
				<div className="container__background">
					{background.src && <img src={background.src} alt="" />}
				</div>
			)}
			<div
				{...{
					...innerBlocksProps,
					className: classnames(
						innerBlocksProps.className,
						"container__content",
					),
				}}
			/>
		</Tag>
	);
}
