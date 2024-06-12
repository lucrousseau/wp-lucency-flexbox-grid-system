export function updateStylesCustomFn({
	result,
	prefix,
	prop,
	value,
	unit,
	params,
}) {
	const { display, innerBlocksCount } = params;

	if (prop === "cols") {
		if (display !== "grid") return true;

		result[`--${prefix}rows`] = `${Math.ceil(innerBlocksCount / value)}${unit}`;
	}

	return;
}
