import { COLUMNS } from "../abstracts/constants";

export function updateStylesCustomFn({
	result,
	prefix,
	prop,
	value,
	unit,
	display,
	innerBlocksCount,
}) {
	if (prop === "grid-template-columns") {
		if (display !== "grid") return true;

		result[`--grid-template-rows${prefix}`] = `${
			COLUMNS / Math.ceil(innerBlocksCount / value)
		}${unit}`;
	}

	return;
}
