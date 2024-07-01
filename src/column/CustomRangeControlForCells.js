import { __ } from "@wordpress/i18n";
import { RangeControl } from "@wordpress/components";

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

	const customTooltipContent = ({ columns }) =>
		`${!columns ? __("Auto", "lucency") : columns}`;

	const marks = [
		{
			value: 0,
			label: __("Auto", "lucency"),
		},
		...Array.from({ length: totalCells }, (_, i) => ({
			value: (i + 1) * (100 / totalCells),
			label: (i + 1).toString(),
		})),
	];

	return (
		<RangeControl
			label={__(generateLabels({ value: columns, label }), "lucency")}
			min={0}
			max={100}
			columns={columns}
			value={value}
			marks={marks}
			withInputField={false}
			renderTooltipContent={() => customTooltipContent({ columns })}
			onChange={onChange}
			help={__(`Leave at AUTO for auto ${label}`, "lucency")}
		/>
	);
}
