import { getDisplayPropValue } from "../commons/displayPropValue";
import { getCumulatedCellDimensions } from "../commons/getCumulatedCellDimensions";

export function computeGridLayout({ clientId }) {
	const { cumulatedCellsDimensions, childrenCount } =
		getCumulatedCellDimensions({ clientId });

	const getCumulatedCellsDimensions =
		cumulatedCellsDimensions?.full?.width +
		cumulatedCellsDimensions?.full?.height;

	const cols = Math.ceil(Math.sqrt(childrenCount));
	const rows = Math.ceil((getCumulatedCellsDimensions || childrenCount) / cols);

	return {
		"--grid-template-columns": cols.toString(),
		"--grid-template-rows": rows.toString(),
	};
}

export function generateLayoutStyles({
	display,
	clientId,
	style,
	stylesClasses,
}) {
	const { isGrid } = getDisplayPropValue({ display });
	const hasColumns =
		stylesClasses?.full?.variables?.["grid-template-columns"]?.value;

	const dimensions = computeGridLayout({
		clientId,
	});

	return isGrid && !hasColumns
		? {
				...style,
				...dimensions,
		  }
		: style;
}
