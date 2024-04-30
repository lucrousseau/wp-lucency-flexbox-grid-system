export default function handleStylesClassesChange({
	size,
	prop,
	value,
	key,
	stylesClasses,
	setAttributes,
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

	if (!value) {
		delete updatedStylesClasses[size][key][prop];
	}

	if (Object.keys(updatedStylesClasses[size]).length === 0) {
		delete updatedStylesClasses[size];
	}

	setAttributes({ stylesClasses: updatedStylesClasses });
}
