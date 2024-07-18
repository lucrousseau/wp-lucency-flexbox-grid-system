import { __ } from "@wordpress/i18n";
import { RangeControl } from "@wordpress/components";

import {
	rangeControlForColsCellsMarks,
	rangeControlForColsCellsTooltipContent,
} from "../RangeControlForColsCells";

export default function RangeControlForColsCells({
	label,
	value,
	columns,
	onChange,
	totalCells,
	colOrCellLabel,
}) {
	const generateLabels = ({ value, label }) =>
		value && value !== 0
			? `${value} ${colOrCellLabel}(s) ${label} on ${totalCells}`
			: `Auto ${colOrCellLabel}(s) ${label}`;

	return (
		<RangeControl
			label={__(generateLabels({ value: columns, label }), "lucency")}
			min={0}
			max={100}
			columns={columns}
			value={value}
			marks={rangeControlForColsCellsMarks({ total: totalCells })}
			withInputField={false}
			renderTooltipContent={() =>
				rangeControlForColsCellsTooltipContent({ columns })
			}
			onChange={onChange}
			help={__(`Leave at AUTO for auto ${label}`, "lucency")}
		/>
	);
}
