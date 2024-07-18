import classnames from "classnames";

import getDisplayTypeFlags from "../commons/getDisplayTypeFlags";
import { getPrefix } from "../commons/prefix";
import { roundCellDimension } from "../commons/roundCellDimension";
import { generateGridDimensions } from "../row/generateGridDimensions";
import { COLUMNS } from "../abstracts/constants";

export default function responsiveColumnSizes({
	display,
	parentStylesClasses,
	innerBlocksCount,
	width,
	height,
	clientId,
}) {
	const { isGrid } = getDisplayTypeFlags({ display });

	const getGenerateGridDimensions = generateGridDimensions({
		innerBlocksCount,
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
