import calculatWidthAndHeightSumOfCellsInGrid from "./calculatWidthAndHeightSumOfCellsInGrid";

export default function calculateGridLayoutStylesDimension({
	innerBlocksCount,
	innerBlocks,
}) {
	const cumulatedCellsDimensions = calculatWidthAndHeightSumOfCellsInGrid({
		innerBlocksCount,
		innerBlocks,
	});

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
