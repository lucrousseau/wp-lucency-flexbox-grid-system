export function getCumulatedCellsWidth({ innerBlocks, innerBlocksCount }) {
	const cumulatedCellsWidth = {};

	if (innerBlocksCount && Object.keys(innerBlocks).length) {
		const cols = Math.ceil(Math.sqrt(innerBlocksCount));

		innerBlocks.forEach((block) => {
			const { width } = block?.attributes || {};

			Object.entries(width).map(([key, value]) => {
				const get = cumulatedCellsWidth?.[key] || 0;
				const convertToColumns = (value * cols) / 100;
				const set = get + (convertToColumns || 1);

				cumulatedCellsWidth[key] = set;
			});
		});
	}

	return cumulatedCellsWidth;
}
