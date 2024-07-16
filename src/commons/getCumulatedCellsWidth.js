import { fetchBlockDetails } from "./fetchBlockDetails";

export function getCumulatedCellsWidth({ clientId }) {
	const cumulatedCellsDimensions = {};

	const { childrenCount, childrenBlocks } = fetchBlockDetails({
		clientId,
	});

	if (childrenCount && Object.keys(childrenBlocks).length) {
		const cols = Math.ceil(Math.sqrt(childrenCount));
		const rows = Math.ceil(childrenBlocks / cols);

		childrenBlocks.forEach((block) => {
			const { width, height } = block?.attributes || {};

			Object.entries(width).map(([key, value]) => {
				const currentWidth = cumulatedCellsDimensions[key]?.width || 0;
				const widthInColumns = (value * cols) / 100;
				const newWidth = currentWidth + (widthInColumns ?? 1);

				if (!cumulatedCellsDimensions[key]) cumulatedCellsDimensions[key] = {};
				cumulatedCellsDimensions[key].width = newWidth;
			});

			Object.entries(height).map(([key, value]) => {
				const currentHeight = cumulatedCellsDimensions[key]?.height || 0;
				const heightInRows = (value * rows) / 100;
				const newHeight = currentHeight + (heightInRows ?? 1);

				if (!cumulatedCellsDimensions[key]) cumulatedCellsDimensions[key] = {};
				cumulatedCellsDimensions[key].height = newHeight;
			});
		});
	}

	return cumulatedCellsDimensions || {};
}
