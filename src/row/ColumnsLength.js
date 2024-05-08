import { useRef, useEffect } from "@wordpress/element";
import { useDispatch, useSelect } from "@wordpress/data";
import { createBlock } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

import { RangeControl } from "@wordpress/components";

import { COLUMNS } from "../abstracts/constants";

export default function ColumnsLength({
	columns,
	setAttributes,
	setShowNotice,
	hasInnerBlocks,
	innerBlocksCount,
	clientId,
}) {
	const { replaceInnerBlocks } = useDispatch("core/block-editor");

	const innerBlocks = useSelect(
		(select) => select("core/block-editor").getBlocks(clientId),
		[clientId],
	);

	const savedContentRef = useRef({});

	useEffect(() => {
		if (!hasInnerBlocks && columns === 1) {
			const initialBlock = createBlock("lucency-grid/column");
			replaceInnerBlocks(clientId, [initialBlock], false);
		}

		if (innerBlocksCount > COLUMNS) {
			setShowNotice(true);
		} else {
			setShowNotice(false);
		}
	}, [columns, hasInnerBlocks, innerBlocksCount]);

	useEffect(() => onColumnsLengthChange({ value: columns }), []);

	const onColumnsLengthChange = ({ value, control = false }) => {
		if (value < 1 || value > COLUMNS) {
			console.error(`The number of columns must be between 1 and ${COLUMNS}.`);
			return;
		}

		const setValue = control ? value : innerBlocksCount || value;
		const updatedInnerBlocks = [...innerBlocks];
		const currentCount = updatedInnerBlocks.length;
		const difference = value - currentCount;

		if (difference < 0) {
			updatedInnerBlocks.slice(value).forEach((block, index) => {
				savedContentRef.current[value + index] = block;
			});

			updatedInnerBlocks.length = value;
		}

		for (let i = currentCount; i < setValue; i++) {
			let newBlock;

			if (savedContentRef.current[i]) {
				newBlock = savedContentRef.current[i];
				delete savedContentRef.current[i];
			} else {
				newBlock = createBlock("lucency-grid/column");
			}

			updatedInnerBlocks.push(newBlock);
		}

		replaceInnerBlocks(clientId, updatedInnerBlocks, false);
		setAttributes({ columns: setValue });
	};

	return (
		<RangeControl
			label={__("Number of Columns in the Row", "lucency")}
			min={1}
			max={COLUMNS}
			value={columns}
			onChange={(value) => onColumnsLengthChange({ value, control: true })}
		/>
	);
}
