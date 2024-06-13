import classnames from "classnames";

import { getDisplayPropValue } from "../commons/displayPropValue";

export default function responsiveColumnSizes({ display, width, height }) {
	const { isGrid } = getDisplayPropValue({ display });

	const createClasses = (sizes, type) =>
		Object.entries(sizes).reduce((acc, [size, value]) => {
			const prefix = size === "full" ? "" : `--${size}`;
			acc[`${type}-${value}${prefix}`] = !!value;
			return acc;
		}, {});

	const widthClasses = createClasses(width, "lucency-col");
	const heightClasses = isGrid ? createClasses(height, "lucency-row") : {};

	return classnames({ ...widthClasses, ...heightClasses });
}
