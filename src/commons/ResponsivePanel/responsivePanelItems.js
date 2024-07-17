import { __ } from "@wordpress/i18n";

import { BREAKPOINTS } from "../../abstracts/constants";

export default function responsivePanelItems({
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

	let panelSettings = [];

	responsivePanel.map(({ title, fn }) =>
		panelSettings.push({
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
