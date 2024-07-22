import { __ } from "@wordpress/i18n";
import { SelectControl } from "@wordpress/components";

export default function RenderGridFlexSelector({
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
