import {
	SelectControl,
	RangeControl,
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
	unit,
	min,
	max,
	col = 6,
	shiftStep = 10,
	onChange = null,
	setDefault = null,
	defaultStylesClasses = {},
}) => {
	const defaultValue =
		setDefault ?? defaultStylesClasses?.[size]?.[key]?.[prop];
	const setValues = stylesClasses?.[size]?.[key]?.[prop] ?? null;
	const setOnChange =
		onChange ??
		((value) =>
			handleStylesClassesChange({
				size,
				prop,
				value,
				key,
				unit,
				stylesClasses,
				setAttributes,
				defaultValue,
			}));

	let output = null;

	switch (type) {
		case "select":
			const setOptions = !defaultValue
				? [...[{ label: "", value: null }], ...options]
				: options;
			output = (
				<SelectControl
					label={label}
					value={setValues ?? defaultValue}
					options={setOptions}
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

		case "range":
			output = (
				<RangeControl
					label={label}
					min={min}
					max={max}
					value={setValues ?? defaultValue}
					onChange={setOnChange}
				/>
			);
			break;
	}

	return <div className={`lucency-col lucency-col-${col}`}>{output}</div>;
};

export default responsivePanelControls;
