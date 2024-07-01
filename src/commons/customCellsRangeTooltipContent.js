import { __ } from "@wordpress/i18n";

export function customCellsRangeTooltipContent(props) {
	const getValue = props?.columns ?? props;

	return `${!getValue ? __("Auto", "lucency") : getValue}`;
}
