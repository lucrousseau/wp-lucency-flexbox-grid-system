import { __ } from "@wordpress/i18n";
import { RangeControl } from "@wordpress/components";
import { customCellsRangeTooltipContent } from "../commons/customCellsRangeTooltipContent";
import { generateMarksForRange } from "../commons/generateMarksForRange";

export default function CustomRangeControlForCells({
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

	const calc = (100 / totalCells) * columns;
	const setValue = calc !== value ? calc : value;

	return (
		<RangeControl
			label={__(generateLabels({ value: columns, label }), "lucency")}
			min={0}
			max={100}
			columns={columns}
			value={setValue}
			marks={generateMarksForRange({ total: totalCells })}
			withInputField={false}
			renderTooltipContent={() => customCellsRangeTooltipContent({ columns })}
			onChange={onChange}
			help={__(`Leave at AUTO for auto ${label}`, "lucency")}
		/>
	);
}
