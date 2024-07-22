import classnames from "classnames";

import getBreakpointPrefix from "./getBreakpointPrefix";

import { PANEL_ALL_PROPS } from "../abstracts/constants";

function processStylesClassesChange({
	key,
	stylesClasses = {},
	defaultStylesClasses = {},
	processEntry,
}) {
	let result = {};

	Object.entries(stylesClasses ?? {}).forEach(([size, props]) =>
		Object.entries(props?.[key] ?? {}).forEach(([prop, values]) => {
			const value = values?.value ?? values ?? null;
			const unit = values?.unit ?? "";

			if (value !== undefined && value !== null) {
				const prefix = getBreakpointPrefix({ size });
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

function handleEntry({ key, props, applyEntry = () => {} }) {
	const {
		stylesClasses = {},
		defaultStylesClasses = {},
		fn = () => {},
		display,
	} = props;

	const processed = processStylesClassesChange({
		key,
		stylesClasses,
		defaultStylesClasses,
		processEntry: (entryProps) => {
			const { prop, value, defaultValue } = entryProps;
			const skip = fn({ ...props, ...entryProps });
			const controls = PANEL_ALL_PROPS({ display });

			if (
				skip === true ||
				value?.toString() === defaultValue?.toString() ||
				!controls?.[prop]
			)
				return;

			applyEntry(entryProps);
		},
	});

	return processed;
}

export function updateStyles(props, style) {
	const key = "variables";

	const applyEntry = ({ result, prefix, prop, value, unit }) => {
		result[`--${prop}${prefix}`] = `${value}${unit}`;
	};

	const processed = handleEntry({ key, props, applyEntry });

	return { ...style, ...processed };
}

export function updateClasses(props, classes = null) {
	const key = "classes";

	const applyEntry = ({ result, prefix, value }) => {
		result[`${value}${prefix}`] = true;
	};

	const processed = handleEntry({ key, props, applyEntry });

	return classnames(classes, { ...processed });
}
