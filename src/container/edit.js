import classnames from "classnames";
import { useSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import {
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
} from "@wordpress/block-editor";

import { PanelBody } from "@wordpress/components";

import ResponsivePanel, {
	updateStyles,
	updateClasses,
} from "../commons/ResponsivePanel";

import metadata from "./block.json";

import "./editor.scss";

export default function Edit({ attributes, setAttributes, clientId }) {
	const { stylesClasses } = attributes;

	const style = updateStyles({ stylesClasses });

	const { hasInnerBlocks } = useSelect((select) => ({
		hasInnerBlocks: select("core/block-editor").getBlockCount(clientId) > 0,
	}));

	const blockProps = useBlockProps({
		className: updateClasses(
			{ stylesClasses },
			classnames("container lucency lucency-flex"),
		),
	});

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		renderAppender: !hasInnerBlocks
			? () => <InnerBlocks.ButtonBlockAppender />
			: null,
	});

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Container Settings")}>
					<ResponsivePanel
						stylesClasses={stylesClasses}
						setAttributes={setAttributes}
						defaultStylesClasses={metadata?.attributes?.stylesClasses?.default}
					/>
				</PanelBody>
			</InspectorControls>
			<section {...blockProps} style={style}>
				<div {...innerBlocksProps} className="lucency-col"></div>
			</section>
		</>
	);
}
