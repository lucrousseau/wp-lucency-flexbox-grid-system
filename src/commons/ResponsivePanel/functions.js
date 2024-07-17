import classnames from "classnames";

import { PANEL_ALL_PROPS } from "../../abstracts/constants";
import { getPrefix } from "../../commons/prefix";

function processStylesClasses({
	key,
	stylesClasses = {},
	defaultStylesClasses = {},
	processEntry,
}) {
	let result = {};

	Object.entries(stylesClasses ?? {}).forEach(([size, props]) =>
		Object.entries(props?.[key] ?? {}).forEach(([prop, values]) => {
			let value = values?.value ?? values ?? null;
			let unit = values?.unit ?? "";

			if (value !== undefined && value !== null) {
				const prefix = getPrefix({ size });
				const defaultValue = defaultStylesClasses?.[size]?.[key]?.[prop]?.value;

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

export function updateStyles(props, style) {
	const {
		stylesClasses = {},
		defaultStylesClasses = {},
		fn = () => {},
		display,
	} = props;

	const key = "variables";

	let processed = processStylesClasses({
		key,
		stylesClasses,
		defaultStylesClasses,
		processEntry: (entryProps) => {
			const { result, prefix, prop, value, unit, defaultValue } = entryProps;
			const skip = fn({ ...props, ...entryProps });
			const controls = PANEL_ALL_PROPS({ display });

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

export function updateClasses(props, classes = null) {
	const {
		stylesClasses = {},
		defaultStylesClasses = {},
		fn = () => {},
		display,
	} = props;

	const key = "classes";

	let processed = processStylesClasses({
		key,
		stylesClasses,
		defaultStylesClasses,
		processEntry: (entryProps) => {
			const { result, prefix, prop, value, defaultValue } = entryProps;
			const skip = fn({ ...props, ...entryProps });
			const controls = PANEL_ALL_PROPS({ display });

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
