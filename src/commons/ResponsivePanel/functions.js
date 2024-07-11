import classnames from "classnames";

import { FLEX_CSS_PROPS } from "../../abstracts/constants";
import { getPrefix } from "../../commons/prefix";

function processStylesClasses({ key, props, processEntry }) {
	let result = {};

	const { attributes, blockDefaultStylesClasses } = props;
	const { stylesClasses } = attributes;

	Object.entries(stylesClasses ?? {}).forEach(([size, props]) =>
		Object.entries(props?.[key] ?? {}).forEach(([prop, values]) => {
			let value = values?.value ?? values ?? null;
			let unit = values?.unit ?? "";

			if (value !== undefined && value !== null) {
				const prefix = getPrefix({ size });
				const defaultValue =
					blockDefaultStylesClasses?.[size]?.[key]?.[prop]?.value;

				processEntry({
					size,
					result,
					prefix,
					prop,
					value,
					unit,
					defaultValue,
				});
			}
		}),
	);

	return result;
}

export function updateStyles(
	{ props, fn = () => {}, params = {} },
	style = {},
) {
	const key = "variables";

	let processed = processStylesClasses({
		key,
		props,
		processEntry: (props) => {
			const { result, prefix, prop, value, unit, defaultValue } = props;
			const { display } = params;
			const skip = fn({ params, ...props });
			const controls = FLEX_CSS_PROPS({ display });

			if (
				skip === true ||
				value?.toString() === defaultValue?.toString() ||
				!controls?.[prop]
			)
				return;

			result[`--${prop}${prefix}`] = `${value}${unit}`;
		},
	});

	return { ...style, ...processed };
}

export function updateClasses(
	{ props, fn = () => {}, params = {} },
	classes = null,
) {
	const key = "classes";

	let processed = processStylesClasses({
		key,
		props,
		processEntry: (props) => {
			const { result, prefix, prop, value, defaultValue } = props;
			const { display } = params;
			const skip = fn({ params, ...props });
			const controls = FLEX_CSS_PROPS({ display });

			if (
				skip === true ||
				value?.toString() === defaultValue?.toString() ||
				!controls?.[prop]
			)
				return;

			result[`${value}${prefix}`] = true;
		},
	});

	return classnames(classes, { ...processed });
}
