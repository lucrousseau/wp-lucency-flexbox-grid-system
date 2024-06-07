import { useDispatch } from "@wordpress/data";
import { createBlock } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

import "./ColumnAppender.scss";

export default function ColumnAppender({ innerBlocksCount, clientId }) {
	const { insertBlocks } = useDispatch("core/block-editor");

	const addNewColumn = () => {
		const block = createBlock("lucency-grid/column");
		insertBlocks(block, innerBlocksCount, clientId);
	};

	return (
		<div className="lucency-admin-row-column-appender" onClick={addNewColumn}>
			<span>{__("Add a Column", "lucency")}</span>
			<span></span>
		</div>
	);
}
