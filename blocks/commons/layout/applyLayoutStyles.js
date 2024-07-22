import getDisplayTypeFlags from "../getDisplayTypeFlags";

import calculateGridLayoutStylesDimension from "./calculateGridLayoutStylesDimension";

export default function applyLayoutStyles({
	display,
	innerBlocksCount,
	innerBlocks,
	style,
	stylesClasses,
}) {
	const { isGrid } = getDisplayTypeFlags({ display });
	const hasColumns =
		stylesClasses?.full?.variables?.["grid-template-columns"]?.value;

	const dimensions = calculateGridLayoutStylesDimension({
		innerBlocksCount,
		innerBlocks,
	});

	return isGrid && !hasColumns
		? {
				...style,
				...dimensions,
		  }
		: style;
}
