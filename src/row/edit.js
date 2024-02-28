import { useRef, useEffect, useState } from "@wordpress/element";
import classnames from "classnames";
import { useDispatch, useSelect, select } from "@wordpress/data";
import { createBlock } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import {
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
} from "@wordpress/block-editor";

import { PanelBody, Notice, RangeControl } from "@wordpress/components";

import { COLUMNS } from "../abstracts/constants";

import {
	MarginPadding,
	updateStyleWithMarginPadding,
} from "../commons/MarginPadding";

import "./editor.scss";

export default function Edit({ attributes, setAttributes, clientId }) {
	const { tag, marginPadding, columns } = attributes;
	const Tag = tag;
	const [showNotice, setShowNotice] = useState(false);

	const { hasInnerBlocks, innerBlocksCount } = useSelect((select) => {
		const count = select("core/block-editor").getBlockCount(clientId);

		return {
			hasInnerBlocks: count > 0,
			innerBlocksCount: count,
		};
	});

	useEffect(() => {
		if (!hasInnerBlocks && columns === 1) {
			const initialBlock = createBlock("lucidity-flexbox-grid-system/column");
			replaceInnerBlocks(clientId, [initialBlock], false);
		}

		if (innerBlocksCount > COLUMNS) {
			setShowNotice(true);
		} else {
			setShowNotice(false);
		}
	}, [columns, hasInnerBlocks, innerBlocksCount]);

	let style = {};
	style = updateStyleWithMarginPadding({ marginPadding, style });

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

	const savedContentRef = useRef({});

	const onColumnsChange = (newColumns) => {
		if (newColumns < 1 || newColumns > COLUMNS) {
			console.error(`The number of columns must be between 1 and ${COLUMNS}.`);
			return;
		}

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
				delete savedContentRef.current[i];
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
			{showNotice && (
				<Notice status="error" isDismissible={false}>
					{__(
						"This block is intended to be used with 12 columns. Having more can lead to unexpected results.",
						"lucidity-flexbox-grid-system",
					)}
				</Notice>
			)}
			<Tag {...innerBlocksProps} style={style}></Tag>
		</>
	);
}
