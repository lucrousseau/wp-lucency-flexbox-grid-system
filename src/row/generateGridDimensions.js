import { getDisplayPropValue } from "../commons/displayPropValue";

export function generateGridDimensions({ cells, cumulatedCellsWidth = {} }) {
	const cols = Math.ceil(Math.sqrt(cells));
	const rows = Math.ceil((cumulatedCellsWidth?.full || cells) / cols);

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
	cumulatedCellsWidth = {},
}) {
	const { isGrid } = getDisplayPropValue({ display });
	const hasColumns =
		stylesClasses?.full?.variables?.["grid-template-columns"]?.value;
	const dimensions = generateGridDimensions({ cells, cumulatedCellsWidth });

	return isGrid && !hasColumns
		? {
				...style,
				...dimensions,
		  }
		: style;
}
