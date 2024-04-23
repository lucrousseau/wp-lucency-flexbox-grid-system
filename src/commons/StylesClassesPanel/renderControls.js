import {
	SelectControl,
	__experimentalNumberControl as NumberControl,
} from "@wordpress/components";

export default function renderControl({
	stylesClasses,
	options,
	label,
	prop,
	size,
	col = 6,
	handleChange,
}) {
	const renderSelectControl = () => (
		<div className={`lucency-col lucency-col-${col}`}>
			<SelectControl
				label={label}
				value={stylesClasses?.[size]?.classes?.[prop]}
				options={[...[{ label: "", value: null }], ...options]}
				onChange={(value) =>
					handleChange({
						size,
						prop,
						value,
						key: "classes",
					})
				}
				__nextHasNoMarginBottom
			/>
		</div>
	);

	const renderNumberControl = () => (
		<div className={`lucency-col lucency-col-${col}`}>
			<NumberControl
				label={label}
				value={stylesClasses?.[size]?.variables?.[prop] ?? null}
				onChange={(value) =>
					handleChange({
						size,
						prop,
						value,
						key: "variables",
					})
				}
				step={0.1}
				isShiftStepEnabled={true}
				shiftStep={10}
			/>
		</div>
	);

	return options ? renderSelectControl() : renderNumberControl();
}
