import { __ } from "@wordpress/i18n";
import { SelectControl } from "@wordpress/components";

export function setDisplayPropValue({
	labelPosition = "top",
	value,
	onChange,
} = {}) {
	return (
		<SelectControl
			label={__("Display as", "lucency")}
			labelPosition={labelPosition}
			value={value}
			options={[
				{ label: __("Flex", "lucency"), value: "flex" },
				{ label: __("Gird", "lucency"), value: "grid" },
			]}
			onChange={onChange}
			__nextHasNoMarginBottom
		/>
	);
}

export function getDisplayPropValue({ display }) {
	const isGrid = display === "grid";
	const isFlex = display === "flex";
	const isCell = display === "cell";
	const isColumn = display === "column";
	const isContainer = display === "container";

	return {
		isGrid,
		isFlex,
		isCell,
		isColumn,
		isContainer,
		display,
	};
}
