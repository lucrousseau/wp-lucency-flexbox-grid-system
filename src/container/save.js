import classnames from "classnames";

import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";

import { isEmpty } from "../helpers";
import { updateStyleWithMarginPadding } from "../commons/MarginPadding";

export default function save({ attributes }) {
	const { tag, background, marginPadding } = attributes;
	const Tag = tag;

	const style = updateStyleWithMarginPadding({ marginPadding });

	const blockProps = useBlockProps.save({ className: classnames("container") });

	const innerBlocksProps = useInnerBlocksProps.save({
		className: classnames("container__content"),
	});

	return (
		<Tag {...blockProps} style={style}>
			{!isEmpty(background) && (
				<div className="container__background">
					{background.src && <img src={background.src} alt="" />}
				</div>
			)}
			<div {...innerBlocksProps} />
		</Tag>
	);
}
