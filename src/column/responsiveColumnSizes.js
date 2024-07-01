import classnames from "classnames";

import { getDisplayPropValue } from "../commons/displayPropValue";
import { getPrefix } from "../commons/prefix";
import { roundCellWidth } from "../commons/roundCellWidth";
import { generateGridDimensions } from "../row/generateGridDimensions";
import { COLUMNS } from "../abstracts/constants";

export default function responsiveColumnSizes({
	display,
	parentStylesClasses,
	cells,
	width,
	height,
}) {
	const { isGrid } = getDisplayPropValue({ display });

	const getGenerateGridDimensions = generateGridDimensions({
		cells,
	});

	const createClasses = (sizes, type) =>
		Object.entries(sizes).reduce((acc, [size, value]) => {
			const prefix = getPrefix({ size });

			const total = isGrid
				? parentStylesClasses?.[size]?.variables?.["grid-template-columns"]
						?.value ??
				  getGenerateGridDimensions?.["--grid-template-columns"] ??
				  COLUMNS
				: false;

			const getColumnWidth = roundCellWidth({ total, pourcentage: value });
			console.log({ total, pourcentage: value, getColumnWidth });

			acc[`${type}-${getColumnWidth}${prefix}`] = !!getColumnWidth;
			return acc;
		}, {});

	const widthClasses = createClasses(width, "lucency-col");
	const heightClasses = isGrid ? createClasses(height, "lucency-row") : {};

	return classnames({ ...widthClasses, ...heightClasses });
}
