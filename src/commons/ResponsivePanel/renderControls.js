import {
	SelectControl,
	__experimentalNumberControl as NumberControl,
} from "@wordpress/components";

import { handleStylesClassesChange } from ".";

const renderControls = ({
	stylesClasses,
	setAttributes,
	options,
	label,
	type,
	prop,
	size,
	key,
	col,
	onChange = null,
}) => {
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
			}));

	let output = null;

	switch (type) {
		case "select":
			output = (
				<SelectControl
					label={label}
					value={stylesClasses?.[size]?.classes?.[prop]}
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
					value={stylesClasses?.[size]?.variables?.[prop] ?? null}
					onChange={setOnChange}
					step={0.1}
					isShiftStepEnabled={true}
					shiftStep={10}
				/>
			);
			break;
	}

	return <div className={`lucency-col lucency-col-${col}`}>{output}</div>;
};

export default renderControls;
