import classnames from "classnames";

import { getDisplayPropValue } from "../commons/displayPropValue";
import { getPrefix } from "../commons/prefix";
import { roundColumnWidth } from "../commons/roundColumnWidth";

export default function responsiveColumnSizes({
	display,
	parentStylesClasses,
	width,
	height,
}) {
	const { isGrid } = getDisplayPropValue({ display });

	const createClasses = (sizes, type) =>
		Object.entries(sizes).reduce((acc, [size, value]) => {
			const prefix = getPrefix({ size });

			const total = isGrid
				? parentStylesClasses?.[size]?.variables?.["grid-template-columns"]
						?.value
				: false;

			const getColumnWidth = roundColumnWidth({ total, pourcentage: value });

			acc[`${type}-${getColumnWidth}${prefix}`] = !!getColumnWidth;
			return acc;
		}, {});

	const widthClasses = createClasses(width, "lucency-col");
	const heightClasses = isGrid ? createClasses(height, "lucency-row") : {};

	return classnames({ ...widthClasses, ...heightClasses });
}
