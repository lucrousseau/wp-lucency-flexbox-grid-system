import { __ } from "@wordpress/i18n";

export function customCellsRangeTooltipContent({ columns }) {
	return `${!columns ? __("Auto", "lucency") : columns}`;
}
