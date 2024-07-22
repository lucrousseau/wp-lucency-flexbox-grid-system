import { __ } from "@wordpress/i18n";

export default function rangeControlForColsCellsMarks({ total }) {
	return [
		{
			value: 0,
			label: __("Auto", "lucency"),
		},
		...Array.from({ length: total }, (_, i) => ({
			value: (i + 1) * (100 / total),
			label: (i + 1).toString(),
		})),
	];
}
