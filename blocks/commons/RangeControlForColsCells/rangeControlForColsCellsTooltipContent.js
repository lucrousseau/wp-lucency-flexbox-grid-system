import { __ } from "@wordpress/i18n";

export default function rangeTooltipContent(props) {
	const getValue = props?.columns ?? props;

	return `${!getValue ? __("Auto", "lucency") : getValue}`;
}
