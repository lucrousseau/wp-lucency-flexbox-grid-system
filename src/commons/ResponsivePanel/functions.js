import classnames from "classnames";

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
				const prefix = size === "full" ? "" : `--${size}`;
				const defaultValue = defaultStylesClasses?.[size]?.[key]?.[prop]?.value;

				processEntry({ size, result, prefix, prop, value, unit, defaultValue });
			}
		}),
	);

	return result;
}

export function updateStyles(
	{ stylesClasses = {}, defaultStylesClasses = {}, fn = () => {}, params },
	style = {},
) {
	const key = "variables";

	let processed = processStylesClasses({
		key,
		stylesClasses,
		defaultStylesClasses,
		processEntry: (props) => {
			const { result, prefix, prop, value, unit, defaultValue } = props;
			const skip = fn({ params, ...props });

			if (skip === true || value?.toString() === defaultValue?.toString())
				return;
			result[`--${prop}${prefix}`] = `${value}${unit}`;
		},
	});

	return { ...style, ...processed };
}

export function updateClasses(
	{ stylesClasses = {}, defaultStylesClasses = {} },
	classes = null,
) {
	const key = "classes";

	let processed = processStylesClasses({
		key,
		stylesClasses,
		defaultStylesClasses,
		processEntry: ({ result, prefix, value, defaultValue }) => {
			if (value?.toString() === defaultValue?.toString()) return;
			result[`${value}${prefix}`] = true;
		},
	});

	return classnames(classes, { ...processed });
}
