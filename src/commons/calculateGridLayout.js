import getCumulatedCellsWidth from "./getCumulatedCellsWidth";

export default function calculateGridLayout({ innerBlocksCount, clientId }) {
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
