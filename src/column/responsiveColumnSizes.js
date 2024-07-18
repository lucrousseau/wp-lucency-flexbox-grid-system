import classnames from "classnames";

import getDisplayTypeFlags from "../commons/getDisplayTypeFlags";
import getBreakpointPrefix from "../commons/getBreakpointPrefix";
import {
	roundColOrCellDimension,
	calculateGridLayoutStylesDimension,
} from "../commons/layout";

import { COLUMNS } from "../abstracts/constants";

export default function responsiveColumnSizes({
	display,
	parentStylesClasses,
	innerBlocksCount,
	innerBlocks,
	width,
	height,
}) {
	const { isGrid } = getDisplayTypeFlags({ display });

	const getGenerateGridDimensions = calculateGridLayoutStylesDimension({
		innerBlocksCount,
		innerBlocks,
	});

	const createClasses = (sizes, type) =>
		Object.entries(sizes).reduce((acc, [size, value]) => {
			const prefix = getBreakpointPrefix({ size });

			const total = isGrid
				? parentStylesClasses?.[size]?.variables?.["grid-template-columns"]
						?.value ??
				  getGenerateGridDimensions?.["--grid-template-columns"] ??
				  COLUMNS
				: false;

			const getColumnWidth = roundColOrCellDimension({
				total,
				pourcentage: value,
			});

			acc[`${type}-${getColumnWidth}${prefix}`] = !!getColumnWidth;
			return acc;
		}, {});

	const widthClasses = createClasses(width, "lucency-col");
	const heightClasses = isGrid ? createClasses(height, "lucency-row") : {};

	return classnames({ ...widthClasses, ...heightClasses });
}
