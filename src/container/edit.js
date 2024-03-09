import classnames from "classnames";
import { useSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import {
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
} from "@wordpress/block-editor";

import StylesClassesPanel, {
	updateStyles,
	updateClasses,
} from "../commons/StylesClassesPanel";

import "./editor.scss";

export default function Edit({ attributes, setAttributes, clientId }) {
	const { tag, stylesClasses } = attributes;
	const Tag = tag;

	const style = updateStyles({ stylesClasses });

	const { hasInnerBlocks } = useSelect((select) => ({
		hasInnerBlocks: select("core/block-editor").getBlockCount(clientId) > 0,
	}));

	const blockProps = useBlockProps({
		className: updateClasses({ stylesClasses }, classnames("container")),
	});

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		renderAppender: !hasInnerBlocks
			? () => <InnerBlocks.ButtonBlockAppender />
			: null,
	});

	return (
		<>
			<InspectorControls>
				<StylesClassesPanel
					stylesClasses={stylesClasses}
					setAttributes={setAttributes}
				/>
			</InspectorControls>
			<Tag {...innerBlocksProps} style={style} />
		</>
	);
}
