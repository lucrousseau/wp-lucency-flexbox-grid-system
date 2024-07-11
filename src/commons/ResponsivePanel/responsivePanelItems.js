import { __ } from "@wordpress/i18n";

import { BREAKPOINTS } from "../../abstracts/constants";

import responsivePanelControls from "./responsivePanelControls";

export default function responsivePanelItems({
	clientId,
	attributes,
	setAttributes,
	enabled = { margin: false, padding: false },
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
					responsivePanelControls({
						clientId,
						attributes,
						setAttributes,
						size,
						type: "number",
						key: "variables",
						unit: "rem",
						hideUnitInLabel: true,
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
					responsivePanelControls({
						clientId,
						attributes,
						setAttributes,
						type: "number",
						key: "variables",
						unit: "rem",
						hideUnitInLabel: true,
						col: 3,
						min: 0,
						size,
						...props,
					}),
				)}
			</>
		);
	};

	const createResponsivePanelItemsContent = ({ title, size, fn, index }) => {
		if (!fn) {
			console.error(`No function found for type: ${fn}`);
			return null;
		}

		return (
			<div key={`createResponsivePanelItemsContent-${size}-${index}`}>
				<h2>{title}</h2>
				<div
					className="lucency lucency-flex lucency-flex-wrap"
					style={{ "--gap": "0.25em" }}
				>
					{fn({ size })}
				</div>
			</div>
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
			title: "Margins (rem)",
			fn: responsivePanelMargins,
		},
		{
			condition: enabled?.padding,
			title: "Paddings (rem)",
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
			<div
				key={`responsiveResponsiveStylesClassesPanel-${size}`}
				className="responsiveResponsiveStylesClassesPanel"
			>
				{panelSettings.map(({ condition, title, fn }, index) =>
					condition
						? createResponsivePanelItemsContent({ title, fn, size, index })
						: null,
				)}
			</div>
		);

		collapsibleItems[size] = { title, content };
		return collapsibleItems;
	}, {});
}
