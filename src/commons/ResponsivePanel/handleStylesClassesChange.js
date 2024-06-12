export default function handleStylesClassesChange({
	size,
	prop,
	value,
	key,
	unit,
	stylesClasses,
	setAttributes,
	defaultValue,
}) {
	const updatedStylesClasses = {
		...stylesClasses,
		[size]: {
			...stylesClasses[size],
			[key]: {
				...stylesClasses[size]?.[key],
				...(value !== null ? { [prop]: { value, unit } } : {}),
			},
		},
	};

	if (!value || value === defaultValue?.toString()) {
		delete updatedStylesClasses[size][key][prop];
	}

	if (Object.keys(updatedStylesClasses[size]).length === 0) {
		delete updatedStylesClasses[size];
	}

	setAttributes({ stylesClasses: updatedStylesClasses });
}
