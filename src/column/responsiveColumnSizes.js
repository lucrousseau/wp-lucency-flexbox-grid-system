import classnames from "classnames";

import { getDisplayPropValue } from "../commons/displayPropValue";
import { getPrefix } from "../commons/prefix";
import { roundCellDimension } from "../commons/roundCellDimension";
import { generateLayoutStyles } from "../row/generateLayoutStyles";
import { COLUMNS } from "../abstracts/constants";

export default function responsiveColumnSizes({
	display,
	parentStylesClasses,
	width,
	height,
	clientId,
}) {
	const { isGrid } = getDisplayPropValue({ display });

	const getGenerateGridDimensions = generateLayoutStyles({
		clientId,
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

			const getColumnWidth = roundCellDimension({ total, pourcentage: value });

			acc[`${type}-${getColumnWidth}${prefix}`] = !!getColumnWidth;
			return acc;
		}, {});

	const widthClasses = createClasses(width, "lucency-col");
	const heightClasses = isGrid ? createClasses(height, "lucency-row") : {};

	return classnames({ ...widthClasses, ...heightClasses });
}
