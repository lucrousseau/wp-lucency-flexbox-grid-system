import { __ } from "@wordpress/i18n";

import {
	BREAKPOINTS,
	PANEL_MARGINS_PROPS,
	PANEL_PADDINGS_PROPS,
} from "../../abstracts/constants";

import responsivePanelItemsProps from "./responsivePanelItemsProps";

export default function responsivePanelItems({
	stylesClasses,
	setAttributes,
	defaultStylesClasses,
	responsivePanel = { title: null, fn: null },
}) {
	const stylesClassesObject = Object.fromEntries(
		Object.keys(BREAKPOINTS).map((size) => [size, {}]),
	);

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
			show: true,
			title: __("Margins (rem)", "lucency"),
			fn: ({ size }) =>
				responsivePanelItemsProps({
					panelProps: PANEL_MARGINS_PROPS,
					size,
					stylesClasses,
					setAttributes,
					defaultStylesClasses,
				}),
		},
		{
			show: true,
			title: __("Padding (rem)", "lucency"),
			fn: ({ size }) =>
				responsivePanelItemsProps({
					panelProps: PANEL_PADDINGS_PROPS,
					size,
					stylesClasses,
					setAttributes,
					defaultStylesClasses,
				}),
		},
	];

	responsivePanel.map(({ title, fn }) =>
		panelSettings.unshift({
			show: fn,
			title: title || null,
			fn,
		}),
	);

	return Object.keys(stylesClassesObject).reduce((collapsibleItems, size) => {
		const title = `${__(size.toUpperCase(), "lucency")}${
			size !== "full" ? `, ${BREAKPOINTS[size]}px` : ""
		}`;

		const content = (
			<div
				key={`responsiveResponsiveStylesClassesPanel-${size}`}
				className="responsiveResponsiveStylesClassesPanel"
			>
				{panelSettings.map(({ show, title, fn }, index) =>
					show
						? createResponsivePanelItemsContent({ title, fn, size, index })
						: null,
				)}
			</div>
		);

		collapsibleItems[size] = { title, content };
		return collapsibleItems;
	}, {});
}
