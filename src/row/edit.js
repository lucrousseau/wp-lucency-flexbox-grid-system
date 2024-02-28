import { useRef, useEffect } from "@wordpress/element";
import classnames from "classnames";
import { useDispatch, useSelect } from "@wordpress/data";
import { createBlock } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import {
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
} from "@wordpress/block-editor";

import { PanelBody, RangeControl } from "@wordpress/components";

import { COLUMNS } from "../abstracts/constants";

import {
	MarginPadding,
	updateStyleWithMarginPadding,
} from "../commons/MarginPadding";

import "./editor.scss";

export default function Edit({ attributes, setAttributes, clientId }) {
	const { tag, marginPadding, columns } = attributes;
	const Tag = tag;

	useEffect(() => {
		if (!hasInnerBlocks && columns === 1) {
			const initialBlock = createBlock("lucidity-flexbox-grid-system/column");
			replaceInnerBlocks(clientId, [initialBlock], false);
		}
	}, []);

	let style = {};
	style = updateStyleWithMarginPadding({ marginPadding, style });

	const { hasInnerBlocks } = useSelect((select) => ({
		hasInnerBlocks: select("core/block-editor").getBlockCount(clientId) > 0,
	}));

	const blockProps = useBlockProps({
		className: classnames("row"),
	});

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: ["lucidity-flexbox-grid-system/column"],
		renderAppender: !hasInnerBlocks
			? () => <InnerBlocks.ButtonBlockAppender />
			: null,
	});

	const { replaceInnerBlocks } = useDispatch("core/block-editor");
	const innerBlocks = useSelect(
		(select) => select("core/block-editor").getBlocks(clientId),
		[clientId],
	);

	// Initialize savedContent with useRef
	const savedContentRef = useRef({});

	const onColumnsChange = (newColumns) => {
		const updatedInnerBlocks = [...innerBlocks];
		const currentCount = updatedInnerBlocks.length;
		const difference = newColumns - currentCount;

		if (difference < 0) {
			updatedInnerBlocks.slice(newColumns).forEach((block, index) => {
				savedContentRef.current[newColumns + index] = block;
			});
			updatedInnerBlocks.length = newColumns;
		}

		for (let i = currentCount; i < newColumns; i++) {
			let newBlock;

			if (savedContentRef.current[i]) {
				newBlock = savedContentRef.current[i];
				delete savedContentRef.current[i]; // Remove from savedContent after restoring
			} else {
				newBlock = createBlock("lucidity-flexbox-grid-system/column");
			}

			updatedInnerBlocks.push(newBlock);
		}

		replaceInnerBlocks(clientId, updatedInnerBlocks, false);
		setAttributes({ columns: newColumns });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Row Settings")}>
					<RangeControl
						label={__(
							"Number of Columns in the Row",
							"lucidity-flexbox-grid-system",
						)}
						min={1}
						max={COLUMNS}
						value={columns}
						onChange={onColumnsChange}
					/>
				</PanelBody>
				<MarginPadding
					marginPadding={marginPadding}
					setAttributes={setAttributes}
				/>
			</InspectorControls>
			<Tag {...innerBlocksProps} style={style}></Tag>
		</>
	);
}
