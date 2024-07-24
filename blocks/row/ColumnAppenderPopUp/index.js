import { useState, createPortal } from "@wordpress/element";
import { useDispatch } from "@wordpress/data";
import { createBlock } from "@wordpress/blocks";
import { columns as icon } from "@wordpress/icons";
import { __ } from "@wordpress/i18n";
import {
	Button,
	__experimentalNumberControl as NumberControl,
} from "@wordpress/components";

import GridOrFlexSelector from "../../commons/GridOrFlexSelector";
import getDisplayTypeFlags from "../../commons/getDisplayTypeFlags";

import { COLUMNS } from "../../abstracts/constants";

import "./style.scss";

export default function ColumnAppenderPopUp({
	attributes,
	setAttributes,
	clientId,
}) {
	const { display } = attributes;
	const { isGrid, isFlex } = getDisplayTypeFlags({ display });

	const [columnsCount, setColumnsCount] = useState(1);
	const [rowsCount, setRowsCount] = useState(1);
	const [displayProp, setDisplayProp] = useState("flex");
	const { insertBlocks, removeBlock } = useDispatch("core/block-editor");

	const rootContainer =
		document.querySelector(".is-root-container") || document.body;

	const handleAddColumns = () => {
		setAttributes({
			innerBlocksCount: columnsCount,
			display: displayProp,
		});

		const blocks = [];
		for (let i = 0; i < columnsCount * rowsCount; i++) {
			const block = createBlock("wp-lucency-flexbox-grid-system/column");
			blocks.push(block);
		}

		insertBlocks(blocks, null, clientId);
	};

	const handleCancel = () => {
		removeBlock(clientId);
	};

	return createPortal(
		<div className="lucency-admin-row-column-appender-popup">
			<div className="lucency-admin-row-column-appender-popup-inner">
				<header className="lucency">
					<div className="lucency-col">
						<h3>
							{icon}
							{__("Please set the number of columns you want.", "lucency")}
						</h3>
						<p>
							{__(
								"You will be able to set column(s) width and other parameters after this step.",
								"lucency"
							)}
						</p>
					</div>
				</header>
				<div className="lucency lucency-flex">
					<div className="lucency-col">
						{GridOrFlexSelector({
							onChange: (value) => setDisplayProp(value),
							labelPosition: "side",
							value: displayProp,
						})}
					</div>
					<div className="lucency-col">
						<NumberControl
							label={isFlex ? __("Columns", "lucency") : __("Cells", "lucency")}
							value={columnsCount}
							onChange={(value) => setColumnsCount(parseInt(value))}
							labelPosition="side"
							min={1}
							max={isFlex ? COLUMNS : COLUMNS * 4}
						/>
					</div>
					{isGrid && (
						<div className="lucency-col">
							<NumberControl
								label={__("Columns", "lucency")}
								value={rowsCount}
								onChange={(value) => setRowsCount(parseInt(value))}
								labelPosition="side"
								min={1}
								max={COLUMNS}
							/>
						</div>
					)}
					<div className="lucency-col">
						<Button isPrimary onClick={handleAddColumns}>
							{__("Add", "lucency")}
						</Button>
						<Button isDestructive onClick={handleCancel}>
							{__("Cancel", "lucency")}
						</Button>
					</div>
				</div>
			</div>
		</div>,
		rootContainer
	);
}
