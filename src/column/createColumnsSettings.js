import { __ } from "@wordpress/i18n";

import { RangeControl } from "@wordpress/components";

import { COLUMNS, BREAKPOINTS } from "../abstracts/constants";

export default function createColumnsSettings({ sizes, handleSizeChange }) {
	return Object.entries(BREAKPOINTS).reduce((acc, [size]) => {
		const title = `${__(size.toUpperCase(), "lucidity-flexbox-grid-system")}${
			size !== "full" ? `, ${BREAKPOINTS[size]}px` : ""
		}`;

		const content = (
			<RangeControl
				label={__("Columns Eidth", "lucidity-flexbox-grid-system")}
				min={0}
				max={COLUMNS}
				value={sizes?.[size] ?? 0}
				onChange={(value) => handleSizeChange({ size, sizes, value })}
				help={__("Leave at 0 for auto width", "lucidity-flexbox-grid-system")}
			/>
		);

		acc[size] = { title, content };
		return acc;
	}, {});
}
