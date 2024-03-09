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
	handleChange,
}) {
	const renderSelectControl = () => (
		<div className="col col--6">
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
		<div className="col col--3">
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
