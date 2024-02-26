import classnames from "classnames";
import { useSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import {
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
} from "@wordpress/block-editor";
import "./editor.scss";

export default function Edit({ attributes, setAttributes, clientId }) {
	const { tag, background, style } = attributes;
	const Tag = tag;

	const { hasInnerBlocks } = useSelect((select) => ({
		hasInnerBlocks: select("core/block-editor").getBlockCount(clientId) > 0,
	}));

	const blockProps = useBlockProps({
		className: classnames("container"),
	});

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		renderAppender: !hasInnerBlocks
			? () => <InnerBlocks.ButtonBlockAppender />
			: null,
	});

	return (
		<Tag style={style} {...blockProps}>
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
