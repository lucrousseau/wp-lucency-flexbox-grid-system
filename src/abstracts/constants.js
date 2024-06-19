import { __ } from "@wordpress/i18n";

import { getDisplayPropValue } from "../commons/displayPropValue";

const COLUMNS = 12;

const BREAKPOINTS = {
	full: 999999,
	xxl: 1400,
	xl: 1200,
	lg: 992,
	md: 768,
	sm: 576,
	xs: 480,
};

const FLEX_CSS_PROPS = ({ display = "flex", size = null } = {}) => {
	const { isGrid, isFlex, isContainer } = getDisplayPropValue({ display });
	let controls = {};

	if (isFlex) {
		controls = {
			display: {
				options: [
					{ label: "flex", value: "lucency-flex" },
					{ label: "inline-flex", value: "lucency-inline-flex" },
				],
				label: __("Display", "lucency"),
				type: "select",
				key: "classes",
			},
			"flex-direction": {
				options: [
					{ label: "row", value: "lucency-flex-row" },
					{ label: "row-reverse", value: "lucency-flex-row-reverse" },
					{ label: "column", value: "lucency-flex-column" },
					{ label: "column-reverse", value: "lucency-flex-column-reverse" },
				],
				label: __("Flex Direction", "lucency"),
				type: "select",
				key: "classes",
			},
			"flex-wrap": {
				options: [
					{ label: "wrap", value: "lucency-flex-wrap" },
					{ label: "wrap-reverse", value: "lucency-flex-wrap-reverse" },
					{ label: "nowrap", value: "lucency-flex-wrap-nowrap" },
				],
				label: __("Flex Wrap", "lucency"),
				type: "select",
				key: "classes",
			},
			"justify-content": {
				options: [
					{ label: "normal", value: "lucency-justify-normal" },
					{ label: "flex-start", value: "lucency-justify-start" },
					{ label: "flex-end", value: "lucency-justify-end" },
					{ label: "center", value: "lucency-justify-center" },
					{ label: "between", value: "lucency-justify-between" },
					{ label: "around", value: "lucency-justify-around" },
					{ label: "evenly", value: "lucency-justify-evenly" },
					{ label: "stretch", value: "lucency-justify-stretch" },
				],
				label: __("Justify Content", "lucency"),
				type: "select",
				key: "classes",
			},
			"align-items": {
				options: [
					{ label: "flex-start", value: "lucency-items-start" },
					{ label: "flex-end", value: "lucency-items-end" },
					{ label: "center", value: "lucency-items-center" },
					{ label: "baseline", value: "lucency-items-baseline" },
					{ label: "stretch", value: "lucency-items-stretch" },
				],
				label: __("Align Items", "lucency"),
				type: "select",
				key: "classes",
			},
			"align-content": {
				options: [
					{ label: "normal", value: "lucency-content-normal" },
					{ label: "center", value: "lucency-content-center" },
					{ label: "flex-start", value: "lucency-content-start" },
					{ label: "flex-end", value: "lucency-content-end" },
					{ label: "space-between", value: "lucency-content-between" },
					{ label: "space-around", value: "lucency-content-around" },
					{ label: "space-evenly", value: "lucency-content-evenly" },
					{ label: "baseline", value: "lucency-content-baseline" },
					{ label: "stretch", value: "lucency-content-stretch" },
				],
				label: __("Align Content", "lucency"),
				type: "select",
				key: "classes",
			},
		};
	}

	if (isGrid) {
		controls = {
			"grid-column": {
				min: 0,
				max: COLUMNS,
				col: COLUMNS,
				setDefault: size === "full" ? COLUMNS / 2 : 0,
				label: __("Columns per Grid", "lucency"),
				type: "range",
				key: "variables",
			},
		};
	}

	if (isContainer) {
		controls = {
			"justify-content": {
				options: [
					{ label: "Left", value: "lucency-justify-start" },
					{ label: "Right", value: "lucency-justify-end" },
					{ label: "center", value: "lucency-justify-center" },
				],
				label: __("Block(s) Align", "lucency"),
				type: "select",
				key: "classes",
			},
		};
	}

	const textAlignControl = {
		"text-align": {
			options: [
				{ label: "left", value: "lucency-align-left" },
				{ label: "center", value: "lucency-align-center" },
				{ label: "right", value: "lucency-align-right" },
				{ label: "justify", value: "lucency-align-justify" },
			],
			label: __("Text Align", "lucency"),
			type: "select",
			key: "classes",
		},
	};

	const gapControl = {
		gap: {
			label: __("Gap", "lucency"),
			type: "number",
			key: "variables",
			unit: "rem",
		},
	};

	return {
		...textAlignControl,
		...(isContainer ? {} : gapControl),
		...controls,
	};
};

export { COLUMNS, BREAKPOINTS, FLEX_CSS_PROPS };
