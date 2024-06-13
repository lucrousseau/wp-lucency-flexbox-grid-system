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

	console.log({ innerBlocksCount, COLUMNS, value });

	if (prop === "grid-column") {
		if (display !== "grid") return true;

		result[`--grid-row${prefix}`] = `${
			COLUMNS / Math.ceil(innerBlocksCount / value)
		}${unit}`;
	}

	return;
}
