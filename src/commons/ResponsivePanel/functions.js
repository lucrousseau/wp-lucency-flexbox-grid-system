import classnames from "classnames";

function processStylesClasses({ key, stylesClasses, processEntry }) {
	let result = {};

	Object.entries(stylesClasses ?? {}).forEach(([size, props]) => {
		const unit = props?.[key]?.unit ?? "";

		Object.entries(props?.[key] ?? {}).forEach(([prop, value]) => {
			if (value !== undefined && value !== null) {
				const prefix = size === "full" ? "" : `${size}-`;

				processEntry({ result, prefix, prop, value, unit });
			}
		});
	});

	return result;
}

export function updateStyles({ stylesClasses }, style = {}) {
	const key = "variables";

	let processed = processStylesClasses({
		key,
		stylesClasses,
		processEntry: ({ result, prefix, prop, value, unit }) => {
			if (prop === "unit") return;

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
