import { useDispatch } from "@wordpress/data";
import { createBlock } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

import getDisplayTypeFlags from "../../commons/getDisplayTypeFlags";

import "./style.scss";

export default function ColumnAppender({
	innerBlocksCount,
	setAttributes,
	clientId,
	display,
}) {
	const { isFlex } = getDisplayTypeFlags({ display });
	const { insertBlocks } = useDispatch("core/block-editor");
	const label = isFlex ? "Column" : "Cell";

	const addNewColumn = () => {
		const block = createBlock("wp-lucency-flexbox-grid-system/column");
		insertBlocks(block, innerBlocksCount, clientId, false);

		setAttributes({
			innerBlocksCount: innerBlocksCount + 1,
		});
	};

	return (
		<div className="lucency-admin-row-column-appender" onClick={addNewColumn}>
			<span>{__(`Add a ${label}`, "lucency")}</span>
			<span></span>
		</div>
	);
}
