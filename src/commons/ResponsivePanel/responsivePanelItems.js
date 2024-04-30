import { __ } from "@wordpress/i18n";

import { BREAKPOINTS } from "../../abstracts/constants";

import { __experimentalNumberControl as NumberControl } from "@wordpress/components";

import handleStylesClassesChange from "./handleStylesClassesChange";

export default function responsivePanelItems({
	enabled = { margin: true, padding: true },
	stylesClasses,
	setAttributes,
	responsivePanelBefore = { title: null, fn: null },
	responsivePanelAfter = { title: null, fn: null },
}) {
	const stylesClassesObject = Object.fromEntries(
		Object.keys(BREAKPOINTS).map((size) => [size, {}]),
	);

	const renderControl = ({
		stylesClasses,
		label,
		prop,
		size,
		col = 6,
		min,
	}) => (
		<div className={`lucency-col lucency-col-${col}`}>
			<NumberControl
				label={label}
				value={stylesClasses?.[size]?.variables?.[prop] ?? null}
				onChange={(value) =>
					handleStylesClassesChange({
						size,
						prop,
						value,
						key: "variables",
						stylesClasses,
						setAttributes,
					})
				}
				min={min}
				step={0.1}
				isShiftStepEnabled={true}
				shiftStep={10}
			/>
		</div>
	);

	const responsivePanelMargins = ({ size }) => {
		const controls = [
			{
				label: __("Top", "lucency"),
				prop: "margin-top",
			},
			{
				label: __("Bottom", "lucency"),
				prop: "margin-bottom",
			},
			{
				label: __("Left", "lucency"),
				prop: "margin-left",
			},
			{
				label: __("Right", "lucency"),
				prop: "margin-right",
			},
		];

		return (
			<>
				{controls.map(({ label, prop }) =>
					renderControl({
						stylesClasses,
						label,
						prop,
						size,
						col: 3,
					}),
				)}
			</>
		);
	};

	const responsivePanelPaddings = ({ size }) => {
		const controls = [
			{
				label: __("Top", "lucency"),
				prop: "padding-top",
				size,
			},
			{
				label: __("Bottom", "lucency"),
				prop: "padding-bottom",
				size,
			},
			{
				label: __("Left", "lucency"),
				prop: "padding-left",
				size,
			},
			{
				label: __("Right", "lucency"),
				prop: "padding-right",
				size,
			},
		];

		return (
			<>
				{controls.map(({ label, prop }) =>
					renderControl({
						stylesClasses,
						label,
						prop,
						size,
						min: 0,
						col: 3,
					}),
				)}
			</>
		);
	};

	const createResponsivePanelItemsContent = ({ title, size, fn }) => {
		if (!fn) {
			console.error(`No function found for type: ${fn}`);
			return null;
		}

		return (
			<>
				<h2>{title}</h2>
				<div
					className="lucency lucency-flex lucency-flex-wrap"
					style={{ "--gap": "0.25em" }}
				>
					{fn({ size })}
				</div>
			</>
		);
	};

	const panelSettings = [
		{
			condition: responsivePanelBefore?.fn,
			title: responsivePanelBefore.title || null,
			fn: responsivePanelBefore.fn,
		},
		{
			condition: enabled?.margin,
			title: "Margins",
			fn: responsivePanelMargins,
		},
		{
			condition: enabled?.padding,
			title: "Paddings",
			fn: responsivePanelPaddings,
		},
		{
			condition: responsivePanelAfter?.fn,
			title: responsivePanelAfter?.title || null,
			fn: responsivePanelAfter.fn,
		},
	];

	return Object.keys(stylesClassesObject).reduce((collapsibleItems, size) => {
		const title = `${__(size.toUpperCase(), "lucency")}${
			size !== "full" ? `, ${BREAKPOINTS[size]}px` : ""
		}`;

		const content = (
			<div className="responsiveResponsiveStylesClassesPanel">
				{panelSettings.map(({ condition, title, fn }) =>
					condition
						? createResponsivePanelItemsContent({ title, fn, size })
						: null,
				)}
			</div>
		);

		collapsibleItems[size] = { title, content };
		return collapsibleItems;
	}, {});
}
