import { getDisplayPropValue } from "../commons/displayPropValue";
import { getCumulatedCellDimensions } from "../commons/getCumulatedCellDimensions";
import { fetchRowBlockDetails } from "./fetchRowBlockDetails";

export function generateLayoutStyles({ clientId, style = {} }) {
	const { cumulatedCellsDimensions } = getCumulatedCellDimensions({ clientId });
	const { childrenCount, blockAttributes } = fetchRowBlockDetails({
		clientId,
	});
	const { stylesClasses, display } = blockAttributes;

	let { isGrid } = getDisplayPropValue({ display });
	const hasGridTemplateColumns =
		stylesClasses?.full?.variables?.["grid-template-columns"]?.value;

	const totalDimensions =
		(cumulatedCellsDimensions?.full?.width || 0) +
		(cumulatedCellsDimensions?.full?.height || 0);

	const cols = Math.ceil(Math.sqrt(childrenCount));
	const rows = Math.ceil((totalDimensions || childrenCount) / cols);

	const dimensions = {
		"--grid-template-columns": cols.toString(),
		"--grid-template-rows": rows.toString(),
	};

	if (!style) return dimensions;

	return isGrid && !hasGridTemplateColumns
		? {
				...style,
				...dimensions,
		  }
		: style;
}
