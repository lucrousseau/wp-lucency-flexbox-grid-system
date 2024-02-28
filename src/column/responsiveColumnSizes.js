import classnames from "classnames";

export default function responsiveColumnSizes({ sizes }) {
	const classes = Object.entries(sizes).reduce((acc, [size, value]) => {
		const prefix = size === "full" ? "" : `${size}-`;
		acc[`col--${prefix}${value}`] = true;
		return acc;
	}, {});

	return classnames(classes);
}
