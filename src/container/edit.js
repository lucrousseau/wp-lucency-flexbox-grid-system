import classnames from "classnames";
import { useSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import {
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
} from "@wordpress/block-editor";

import {
	AlignementsMarginPadding,
	updateStyles,
} from "../commons/AlignementsMarginPadding";

import "./editor.scss";

export default function Edit({ attributes, setAttributes, clientId }) {
	const { tag, marginPadding } = attributes;
	const Tag = tag;

	const style = updateStyles({ marginPadding });

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
		<>
			<InspectorControls>
				<AlignementsMarginPadding
					marginPadding={marginPadding}
					setAttributes={setAttributes}
				/>
			</InspectorControls>
			<Tag {...innerBlocksProps} style={style} />
		</>
	);
}
