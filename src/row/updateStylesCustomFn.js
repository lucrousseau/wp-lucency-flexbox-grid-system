import { COLUMNS } from "../abstracts/constants";

export function updateStylesCustomFn({
	result,
	prefix,
	prop,
	value,
	unit,
	params,
}) {
	const { display, innerBlocksCount } = params;

	if (prop === "grid-template-columns") {
		if (display !== "grid") return true;

		result[`--grid-template-rows${prefix}`] = `${
			COLUMNS / Math.ceil(innerBlocksCount / value)
		}${unit}`;
	}

	return;
}
