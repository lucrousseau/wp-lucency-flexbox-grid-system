import { useDispatch } from "@wordpress/data";
import { createBlock } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

import { getDisplayPropValue } from "../commons/displayPropValue";
import { fetchRowBlockDetails } from "./fetchRowBlockDetails";

import "./ColumnAppender.scss";

export default function ColumnAppender({
	attributes,
	setAttributes,
	clientId,
}) {
	const { display } = attributes;
	const { isFlex } = getDisplayPropValue({ display });
	const { insertBlocks } = useDispatch("core/block-editor");
	const label = isFlex ? "Column" : "Cell";

	const { childrenCount } = fetchRowBlockDetails({
		clientId,
	});

	const addNewColumn = () => {
		const block = createBlock("lucency-grid/column");
		insertBlocks(block, childrenCount, clientId, false);

		setAttributes({
			columns: childrenCount + 1,
		});
	};

	return (
		<div className="lucency-admin-row-column-appender" onClick={addNewColumn}>
			<span>{__(`Add a ${label}`, "lucency")}</span>
			<span></span>
		</div>
	);
}
