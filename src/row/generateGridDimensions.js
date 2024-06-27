import { getDisplayPropValue } from "../commons/displayPropValue";

export function generateGridDimensions({ cells }) {
	const cols = Math.ceil(Math.sqrt(cells));
	const rows = Math.ceil(cells / cols);

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
}) {
	const { isGrid } = getDisplayPropValue({ display });
	const hasColumns =
		stylesClasses?.full?.variables?.["grid-template-columns"]?.value;
	const dimensions = generateGridDimensions({ cells });

	return isGrid && !hasColumns
		? {
				...style,
				...dimensions,
		  }
		: style;
}
