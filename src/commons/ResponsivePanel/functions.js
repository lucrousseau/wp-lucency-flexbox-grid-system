import classnames from "classnames";

function processStylesClasses({ key, stylesClasses, processEntry }) {
	let result = {};

	Object.entries(stylesClasses ?? {}).forEach(([size, props]) =>
		Object.entries(props?.[key] ?? {}).forEach(([prop, values]) => {
			let value = values?.value ?? values ?? null;
			let unit = values?.unit ?? "";

			if (value !== undefined && value !== null) {
				const prefix = size === "full" ? "" : `${size}-`;

				processEntry({ size, result, prefix, prop, value, unit });
			}
		}),
	);

	return result;
}

export function updateStyles(
	{ stylesClasses, fn = () => {}, params },
	style = {},
) {
	const key = "variables";

	let processed = processStylesClasses({
		key,
		stylesClasses,
		processEntry: (props) => {
			const { result, prefix, prop, value, unit } = props;
			const skip = fn({ params, ...props });

			if (["unit"].includes(prop) || skip === true) return;
			result[`--${prefix}${prop}`] = `${value}${unit}`;
		},
	});

	return { ...style, ...processed };
}

export function updateClasses({ stylesClasses }, classes = null) {
	const key = "classes";

	let processed = processStylesClasses({
		key,
		stylesClasses,
		processEntry: ({ result, prefix, value }) => {
			result[`${value}${prefix}`] = true;
		},
	});

	return classnames(classes, { ...processed });
}
