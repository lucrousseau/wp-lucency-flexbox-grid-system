import {
	SelectControl,
	RangeControl,
	__experimentalNumberControl as NumberControl,
} from "@wordpress/components";

import { handleStylesClassesChange } from "./";

const responsivePanelControls = ({
	attributes = {},
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
	marks,
	withInputField,
	renderTooltipContent,
	col = 6,
	step = 0.1,
	shiftStep = 10,
	onChange = null,
	setDefault = null,
	hideUnitInLabel = false,
	blockDefaultStylesClasses = {},
}) => {
	const { stylesClasses } = attributes;

	const defaultValue =
		blockDefaultStylesClasses?.[size]?.[key]?.[prop]?.value ?? setDefault;
	const setValues = stylesClasses?.[size]?.[key]?.[prop]?.value ?? null;

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
					label={`${label} ${unit && !hideUnitInLabel ? `(${unit})` : ""}`}
					value={setValues ?? defaultValue}
					onChange={setOnChange}
					step={step}
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
					marks={marks}
					withInputField={withInputField}
					renderTooltipContent={renderTooltipContent}
				/>
			);
			break;
	}

	return (
		<div
			className={`lucency-col lucency-col-${col}`}
			key={`responsivePanelControls-${label}-${size}`}
		>
			{output}
		</div>
	);
};

export default responsivePanelControls;
