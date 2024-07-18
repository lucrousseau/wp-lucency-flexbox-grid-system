import getDisplayTypeFlags from "../commons/getDisplayTypeFlags";
import { getCumulatedCellsWidth } from "./getCumulatedCellsWidth";

export function generateGridDimensions({ innerBlocksCount, clientId }) {
	const cumulatedCellsDimensions = getCumulatedCellsWidth({ clientId });

	const getCumulatedCellsDimensions =
		cumulatedCellsDimensions?.full?.width +
		cumulatedCellsDimensions?.full?.height;

	const cols = Math.ceil(Math.sqrt(innerBlocksCount));
	const rows = Math.ceil(
		(getCumulatedCellsDimensions || innerBlocksCount) / cols,
	);

	return {
		"--grid-template-columns": cols.toString(),
		"--grid-template-rows": rows.toString(),
	};
}

export function generateGridDimensionsStyles({
	display,
	innerBlocksCount,
	clientId,
	style,
	stylesClasses,
}) {
	const { isGrid } = getDisplayTypeFlags({ display });
	const hasColumns =
		stylesClasses?.full?.variables?.["grid-template-columns"]?.value;

	const dimensions = generateGridDimensions({
		innerBlocksCount,
		clientId,
	});

	return isGrid && !hasColumns
		? {
				...style,
				...dimensions,
		  }
		: style;
}
