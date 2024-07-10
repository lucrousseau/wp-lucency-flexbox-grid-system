import { fetchRowBlockDetails } from "../row/fetchRowBlockDetails";

function accumulateDimensions({
	blocks,
	dimension,
	cumulatedDimensions,
	totalUnits,
}) {
	blocks.forEach((block) => {
		const dimensions = block?.attributes?.[dimension] || {};

		Object.entries(dimensions).forEach(([key, value]) => {
			const currentDimension = cumulatedDimensions[key]?.[dimension] || 0;
			const dimensionInUnits = (value * totalUnits) / 100;
			const newDimension = currentDimension + (dimensionInUnits ?? 1);

			if (!cumulatedDimensions[key]) cumulatedDimensions[key] = {};
			cumulatedDimensions[key][dimension] = newDimension;
		});
	});
}

export function getCumulatedCellDimensions({ clientId }) {
	const cumulatedCellsDimensions = {};

	const { childrenCount, childrenBlocks } = fetchRowBlockDetails({ clientId });

	if (childrenCount && Object.keys(childrenBlocks).length) {
		const cols = Math.ceil(Math.sqrt(childrenCount));
		const rows = Math.ceil(childrenCount / cols);

		accumulateDimensions({
			blocks: childrenBlocks,
			dimension: "width",
			cumulatedDimensions: cumulatedCellsDimensions,
			totalUnits: cols,
		});
		accumulateDimensions({
			blocks: childrenBlocks,
			dimension: "height",
			cumulatedDimensions: cumulatedCellsDimensions,
			totalUnits: rows,
		});
	}

	return { cumulatedCellsDimensions, childrenCount } || {};
}
