import classnames from "classnames";

export default function responsiveColumnSizes({ width, height }) {
	const createClasses = (sizes, type) =>
		Object.entries(sizes).reduce((acc, [size, value]) => {
			const prefix = size === "full" ? "" : `--${size}`;
			acc[`${type}-${value}${prefix}`] = !!value;
			return acc;
		}, {});

	const widthClasses = createClasses(width, "lucency-col");
	const heightClasses = createClasses(height, "lucency-row");

	return classnames({ ...widthClasses, ...heightClasses });
}
