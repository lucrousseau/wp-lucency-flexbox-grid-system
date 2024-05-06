import {
	SelectControl,
	__experimentalNumberControl as NumberControl,
} from "@wordpress/components";

import { handleStylesClassesChange } from ".";

const responsivePanelControls = ({
	stylesClasses,
	setAttributes,
	options,
	label,
	type,
	prop,
	size,
	key,
	min,
	max,
	col = 6,
	shiftStep = 10,
	onChange = null,
	defaultStylesClasses = {},
}) => {
	const defaultValue = defaultStylesClasses?.[size]?.[key]?.[prop];
	const setValues = stylesClasses?.[size]?.[key]?.[prop] ?? null;
	const setOnChange =
		onChange ??
		((value) =>
			handleStylesClassesChange({
				size,
				prop,
				value,
				key,
				stylesClasses,
				setAttributes,
				defaultValue,
			}));

	let output = null;

	switch (type) {
		case "select":
			output = (
				<SelectControl
					label={label}
					value={setValues ?? defaultValue}
					options={[...[{ label: "", value: null }], ...options]}
					onChange={setOnChange}
					__nextHasNoMarginBottom
				/>
			);
			break;

		case "number":
			output = (
				<NumberControl
					label={label}
					value={setValues ?? defaultValue}
					onChange={setOnChange}
					step={0.1}
					isShiftStepEnabled={true}
					shiftStep={shiftStep}
					min={min}
					max={max}
				/>
			);
			break;
	}

	return <div className={`lucency-col lucency-col-${col}`}>{output}</div>;
};

export default responsivePanelControls;
