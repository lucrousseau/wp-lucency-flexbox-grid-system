import { __ } from "@wordpress/i18n";

import getDisplayTypeFlags from "../commons/getDisplayTypeFlags";
import {
	rangeControlForColsCellsMarks,
	rangeControlForColsCellsTooltipContent,
} from "../commons/RangeControlForColsCells";

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

const CONTAINER_PROPS = {
	"justify-content": {
		options: [
			{ label: "Inherit", value: "lucency-justify-inherit" },
			{ label: "Left", value: "lucency-justify-start" },
			{ label: "Center", value: "lucency-justify-center" },
			{ label: "Right", value: "lucency-justify-end" },
		],
		label: __("Block(s) Align", "lucency"),
		type: "select",
		key: "classes",
		setDefault: "lucency-justify-inherit",
	},
};

const FLEX_PROP = {
	display: {
		options: [
			{ label: "Flex", value: "lucency-flex" },
			{ label: "Inline-flex", value: "lucency-inline-flex" },
		],
		label: __("Display", "lucency"),
		type: "select",
		key: "classes",
		setDefault: "lucency-flex",
	},
	"flex-direction": {
		options: [
			{ label: "Row", value: "lucency-flex-row" },
			{ label: "Row-reverse", value: "lucency-flex-row-reverse" },
			{ label: "Column", value: "lucency-flex-column" },
			{ label: "Column-reverse", value: "lucency-flex-column-reverse" },
		],
		label: __("Flex Direction", "lucency"),
		type: "select",
		key: "classes",
		setDefault: "lucency-flex-row",
	},
	"flex-wrap": {
		options: [
			{ label: "Wrap", value: "lucency-flex-wrap" },
			{ label: "Wrap-reverse", value: "lucency-flex-wrap-reverse" },
			{ label: "Nowrap", value: "lucency-flex-wrap-nowrap" },
		],
		label: __("Flex Wrap", "lucency"),
		type: "select",
		key: "classes",
		setDefault: "lucency-flex-wrap",
	},
	"justify-content": {
		options: [
			{ label: "Inherit", value: "lucency-justify-inherit" },
			{ label: "Normal", value: "lucency-justify-normal" },
			{ label: "Flex-start", value: "lucency-justify-start" },
			{ label: "Flex-end", value: "lucency-justify-end" },
			{ label: "Center", value: "lucency-justify-center" },
			{ label: "Between", value: "lucency-justify-between" },
			{ label: "Around", value: "lucency-justify-around" },
			{ label: "Evenly", value: "lucency-justify-evenly" },
			{ label: "Stretch", value: "lucency-justify-stretch" },
		],
		label: __("Justify Content", "lucency"),
		type: "select",
		key: "classes",
		setDefault: "lucency-justify-inherit",
	},
	"align-items": {
		options: [
			{ label: "Inherit", value: "lucency-items-inherit" },
			{ label: "Flex-start", value: "lucency-items-start" },
			{ label: "Flex-end", value: "lucency-items-end" },
			{ label: "Center", value: "lucency-items-center" },
			{ label: "Baseline", value: "lucency-items-baseline" },
			{ label: "Stretch", value: "lucency-items-stretch" },
		],
		label: __("Align Items", "lucency"),
		type: "select",
		key: "classes",
		setDefault: "lucency-items-inherit",
	},
	"align-content": {
		options: [
			{ label: "Inherit", value: "lucency-content-inherit" },
			{ label: "Normal", value: "lucency-content-normal" },
			{ label: "Center", value: "lucency-content-center" },
			{ label: "Flex-start", value: "lucency-content-start" },
			{ label: "Flex-end", value: "lucency-content-end" },
			{ label: "Space-between", value: "lucency-content-between" },
			{ label: "Space-around", value: "lucency-content-around" },
			{ label: "Space-evenly", value: "lucency-content-evenly" },
			{ label: "Baseline", value: "lucency-content-baseline" },
			{ label: "Stretch", value: "lucency-content-stretch" },
		],
		label: __("Align Content", "lucency"),
		type: "select",
		key: "classes",
		setDefault: "lucency-content-inherit",
	},
};

const GRID_PROP = {
	"grid-template-columns": {
		min: 0,
		max: COLUMNS,
		col: COLUMNS,
		setDefault: 0,
		label: __("Columns per Grid", "lucency"),
		type: "range",
		key: "variables",
		marks: rangeControlForColsCellsMarks({ total: 100 }),
		renderTooltipContent: rangeControlForColsCellsTooltipContent,
		withInputField: false,
	},
};

const COLUMN_PROPS = {
	"text-align": {
		options: [
			{ label: "Inherit", value: "lucency-align-inherit" },
			{ label: "Left", value: "lucency-align-left" },
			{ label: "Center", value: "lucency-align-center" },
			{ label: "Right", value: "lucency-align-right" },
			{ label: "Justify", value: "lucency-align-justify" },
		],
		label: __("Text Align", "lucency"),
		type: "select",
		key: "classes",
		setDefault: "lucency-align-inherit",
	},
};

const CELL_PROPS = {
	"align-self": {
		options: [
			{ label: "Inherit", value: "lucency-self-inherit" },
			{ label: "Auto", value: "lucency-self-auto" },
			{ label: "Flex-start", value: "lucency-self-start" },
			{ label: "Flex-end", value: "lucency-self-end" },
			{ label: "Center", value: "lucency-self-center" },
			{ label: "Stretch", value: "lucency-self-stretch" },
			{ label: "Baseline", value: "lucency-self-baseline" },
		],
		label: __("Align Self", "lucency"),
		type: "select",
		key: "classes",
		setDefault: "lucency-self-inherit",
	},
};

const TEXT_PROPS = {
	"text-align": {
		options: [
			{ label: "Inherit", value: "lucency-align-inherit" },
			{ label: "Left", value: "lucency-align-left" },
			{ label: "Center", value: "lucency-align-center" },
			{ label: "Right", value: "lucency-align-right" },
			{ label: "Justify", value: "lucency-align-justify" },
		],
		label: __("Text Align", "lucency"),
		type: "select",
		key: "classes",
		setDefault: "lucency-align-inherit",
	},
};

const GAP_PROPS = {
	gap: {
		label: __("Gap", "lucency"),
		type: "number",
		key: "variables",
		unit: "rem",
		step: 1,
		setDefault: 1,
	},
};

const MARGINS_PROPS = {
	"margin-top": {
		label: __("Top", "lucency"),
		type: "number",
		key: "variables",
		unit: "rem",
		col: 3,
		min: 0,
		hideUnitInLabel: true,
	},
	"margin-bottom": {
		label: __("Bottom", "lucency"),
		type: "number",
		key: "variables",
		unit: "rem",
		col: 3,
		min: 0,
		hideUnitInLabel: true,
	},
	"margin-left": {
		label: __("Left", "lucency"),
		type: "number",
		key: "variables",
		unit: "rem",
		col: 3,
		min: 0,
		hideUnitInLabel: true,
	},
	"margin-right": {
		label: __("Right", "lucency"),
		type: "number",
		key: "variables",
		unit: "rem",
		col: 3,
		min: 0,
		hideUnitInLabel: true,
	},
};

const PADDING_PROPS = {
	"padding-top": {
		label: __("Top", "lucency"),
		type: "number",
		key: "variables",
		unit: "rem",
		col: 3,
		min: 0,
		hideUnitInLabel: true,
	},
	"padding-bottom": {
		label: __("Bottom", "lucency"),
		type: "number",
		key: "variables",
		unit: "rem",
		col: 3,
		min: 0,
		hideUnitInLabel: true,
	},
	"padding-left": {
		label: __("Left", "lucency"),
		type: "number",
		key: "variables",
		unit: "rem",
		col: 3,
		min: 0,
		hideUnitInLabel: true,
	},
	"padding-right": {
		label: __("Right", "lucency"),
		type: "number",
		key: "variables",
		unit: "rem",
		col: 3,
		min: 0,
		hideUnitInLabel: true,
	},
};

const PANEL_CSS_PROPS = ({ display = "flex" } = {}) => {
	const { isContainer, isFlex, isGrid, isColumn, isCell } = getDisplayTypeFlags(
		{
			display,
		},
	);

	let props = {};

	if (isContainer)
		props = {
			...CONTAINER_PROPS,
		};

	if (isFlex)
		props = {
			...GAP_PROPS,
			...FLEX_PROP,
		};

	if (isGrid)
		props = {
			...GAP_PROPS,
			...GRID_PROP,
		};

	if (isColumn || isCell)
		props = {
			...COLUMN_PROPS,
			...(isCell ? CELL_PROPS : {}),
		};

	return {
		...TEXT_PROPS,
		...props,
	};
};

const PANEL_MARGINS_PROPS = () => {
	return MARGINS_PROPS;
};

const PANEL_PADDINGS_PROPS = () => {
	return PADDING_PROPS;
};

const PANEL_ALL_PROPS = (props = {}) => {
	return {
		...PANEL_CSS_PROPS(props),
		...PANEL_MARGINS_PROPS(),
		...PANEL_PADDINGS_PROPS(),
	};
};

export {
	COLUMNS,
	BREAKPOINTS,
	PANEL_CSS_PROPS,
	PANEL_MARGINS_PROPS,
	PANEL_PADDINGS_PROPS,
	PANEL_ALL_PROPS,
};
