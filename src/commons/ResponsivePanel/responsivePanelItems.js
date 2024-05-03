import { __ } from "@wordpress/i18n";

import { BREAKPOINTS } from "../../abstracts/constants";

import { __experimentalNumberControl as NumberControl } from "@wordpress/components";

import renderControls from "./renderControls";

export default function responsivePanelItems({
	enabled = { margin: true, padding: true },
	stylesClasses,
	setAttributes,
	defaultStylesClasses = {},
	responsivePanelBefore = { title: null, fn: null },
	responsivePanelAfter = { title: null, fn: null },
}) {
	const stylesClassesObject = Object.fromEntries(
		Object.keys(BREAKPOINTS).map((size) => [size, {}]),
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
				{controls.map((props) =>
					renderControls({
						stylesClasses,
						setAttributes,
						defaultStylesClasses,
						size,
						type: "number",
						key: "variables",
						col: 3,
						...props,
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
			},
			{
				label: __("Bottom", "lucency"),
				prop: "padding-bottom",
			},
			{
				label: __("Left", "lucency"),
				prop: "padding-left",
			},
			{
				label: __("Right", "lucency"),
				prop: "padding-right",
			},
		];

		return (
			<>
				{controls.map((props) =>
					renderControls({
						stylesClasses,
						setAttributes,
						defaultStylesClasses,
						type: "number",
						key: "variables",
						col: 3,
						min: 0,
						size,
						...props,
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
