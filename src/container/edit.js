import classnames from "classnames";
import { useSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import {
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
} from "@wordpress/block-editor";

import { PanelBody, RangeControl } from "@wordpress/components";

import { COLUMNS } from "../abstracts/constants";

import "./editor.scss";

import {
	MarginPadding,
	updateStyleWithMarginPadding,
} from "../commons/MarginPadding";

export default function Edit({ attributes, setAttributes, clientId }) {
	const { tag, background, marginPadding, columns } = attributes;
	const Tag = tag;

	let style = {};
	style = updateStyleWithMarginPadding({ marginPadding, style });

	console.log(style);

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
				<PanelBody title={__("Container Settings")}>
					<RangeControl
						label={__(
							"Number of Columns in the row",
							"lucidity-flexbox-grid-system",
						)}
						min={1}
						max={COLUMNS}
						value={columns}
						onChange={(value) => setAttributes({ columns: value })}
					/>
				</PanelBody>
				<MarginPadding
					marginPadding={marginPadding}
					setAttributes={setAttributes}
				/>
			</InspectorControls>
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
		</>
	);
}
