import getDisplayTypeFlags from "./getDisplayTypeFlags";
import calculateGridLayout from "./calculateGridLayout";

export default function applyGridDimensionsStyles({
	display,
	innerBlocksCount,
	clientId,
	style,
	stylesClasses,
}) {
	const { isGrid } = getDisplayTypeFlags({ display });
	const hasColumns =
		stylesClasses?.full?.variables?.["grid-template-columns"]?.value;

	const dimensions = calculateGridLayout({
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
