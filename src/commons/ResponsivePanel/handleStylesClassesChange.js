export default function handleStylesClassesChange({
	size,
	prop,
	value,
	key,
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
				...(value !== null ? { [prop]: value } : {}),
			},
		},
	};

	console.log({ updatedStylesClasses }, "A");

	if (!value || value === defaultValue?.toString()) {
		delete updatedStylesClasses[size][key][prop];
	}

	if (Object.keys(updatedStylesClasses[size]).length === 0) {
		delete updatedStylesClasses[size];
	}

	console.log({ updatedStylesClasses, defaultValue }, "B");

	setAttributes({ stylesClasses: updatedStylesClasses });
}
