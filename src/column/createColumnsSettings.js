import { __ } from "@wordpress/i18n";

import { RangeControl } from "@wordpress/components";

import { COLUMNS, BREAKPOINTS } from "../abstracts/constants";

export default function createColumnsSettings({ sizes, handleSizeChange }) {
	return Object.entries(BREAKPOINTS).reduce((acc, [size]) => {
		const title = `${__(size.toUpperCase(), "lucency")}${
			size !== "full" ? `, ${BREAKPOINTS[size]}px` : ""
		}`;

		const content = (
			<RangeControl
				label={__("Columns Eidth", "lucency")}
				min={0}
				max={COLUMNS}
				value={sizes?.[size] ?? 0}
				onChange={(value) => handleSizeChange({ size, sizes, value })}
				help={__("Leave at 0 for auto width", "lucency")}
			/>
		);

		acc[size] = { title, content };
		return acc;
	}, {});
}
