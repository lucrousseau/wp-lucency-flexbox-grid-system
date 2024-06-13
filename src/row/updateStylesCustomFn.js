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

	if (prop === "grid-columns") {
		if (display !== "grid") return true;

		result[`--${prefix}grid-rows`] = `${Math.ceil(
			COLUMNS / (innerBlocksCount / value),
		)}${unit}`;
	}

	return;
}
