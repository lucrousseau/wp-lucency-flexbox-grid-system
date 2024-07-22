export default function calculatWidthAndHeightSumOfCellsInGrid({
	innerBlocksCount,
	innerBlocks,
}) {
	const cumulatedCellsDimensions = {};

	if (innerBlocksCount && Object.keys(innerBlocks).length) {
		const cols = Math.ceil(Math.sqrt(innerBlocksCount));
		const rows = Math.ceil(innerBlocksCount / cols);

		const updateCumulatedDimensions = (dimensionType, value, factor) => {
			Object.entries(value).forEach(([key, val]) => {
				const currentDimension =
					cumulatedCellsDimensions[key]?.[dimensionType] || 0;
				const newDimension = currentDimension + ((val * factor) / 100 || 1);

				if (!cumulatedCellsDimensions[key]) cumulatedCellsDimensions[key] = {};
				cumulatedCellsDimensions[key][dimensionType] = newDimension;
			});
		};

		innerBlocks.forEach((block) => {
			const { attributes } = block;
			const { width, height } = attributes || {};

			updateCumulatedDimensions("width", width, cols);
			updateCumulatedDimensions("height", height, rows);
		});
	}

	return cumulatedCellsDimensions;
}
