import { useDispatch } from "@wordpress/data";
import { createBlock } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

import { getDisplayPropValue } from "../commons/displayPropValue";

import "./ColumnAppender.scss";

export default function ColumnAppender({
	innerBlocksCount,
	clientId,
	display,
}) {
	const { isFlex } = getDisplayPropValue({ display });
	const { insertBlocks } = useDispatch("core/block-editor");
	const label = isFlex ? "Column" : "Cell";

	const addNewColumn = () => {
		const block = createBlock("lucency-grid/column");
		insertBlocks(block, innerBlocksCount, clientId, false);
	};

	return (
		<div className="lucency-admin-row-column-appender" onClick={addNewColumn}>
			<span>{__(`Add a ${label}`, "lucency")}</span>
			<span></span>
		</div>
	);
}
