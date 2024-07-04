import { getDisplayPropValue } from "../commons/displayPropValue";

export function generateGridDimensions({
	cells,
	cumulatedCellsDimensions = {},
}) {
	const getCumulatedCellsDimensions =
		cumulatedCellsDimensions?.full?.width +
		cumulatedCellsDimensions?.full?.height;
	const cols = Math.ceil(Math.sqrt(cells));
	const rows = Math.ceil((getCumulatedCellsDimensions || cells) / cols);

	return {
		"--grid-template-columns": cols.toString(),
		"--grid-template-rows": rows.toString(),
	};
}

export function generateGridDimensionsStyles({
	display,
	cells,
	style,
	stylesClasses,
	cumulatedCellsDimensions = {},
}) {
	const { isGrid } = getDisplayPropValue({ display });
	const hasColumns =
		stylesClasses?.full?.variables?.["grid-template-columns"]?.value;
	const dimensions = generateGridDimensions({
		cells,
		cumulatedCellsDimensions,
	});

	return isGrid && !hasColumns
		? {
				...style,
				...dimensions,
		  }
		: style;
}
