import { getDisplayPropValue } from "../commons/displayPropValue";
import { getCumulatedCellsWidth } from "../commons/getCumulatedCellsWidth";

export function generateGridDimensions({ cells, clientId }) {
	const cumulatedCellsDimensions = getCumulatedCellsWidth({ clientId });

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
	clientId,
	style,
	stylesClasses,
}) {
	const { isGrid } = getDisplayPropValue({ display });
	const hasColumns =
		stylesClasses?.full?.variables?.["grid-template-columns"]?.value;

	const dimensions = generateGridDimensions({
		cells,
		clientId,
	});

	return isGrid && !hasColumns
		? {
				...style,
				...dimensions,
		  }
		: style;
}
