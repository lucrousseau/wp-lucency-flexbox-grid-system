import { __ } from "@wordpress/i18n";
import classnames from "classnames";
import { useState } from "@wordpress/element";
import { BREAKPOINTS } from "../../abstracts/constants";

import { __experimentalNumberControl as NumberControl } from "@wordpress/components";

import {
	updateStyles,
	updateClasses,
	handleStylesClassesChange,
} from "./functions";

import "./editor.scss";

function responsivePanelItems({
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
		const ContentFunction = fn;

		if (!ContentFunction) {
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
					<ContentFunction size={size} />
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

export default function ResponsivePanel(props) {
	const [openPanel, setOpenPanel] = useState("full");

	return (
		<div className={classnames("lucency__collapsible")}>
			{Object.entries(responsivePanelItems(props)).map(([item, props]) => {
				const { title, content } = props;

				return (
					<div key={item}>
						<h2 onClick={() => setOpenPanel(item)}>
							{title}
							{openPanel !== item && (
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
									<path
										fill="currentColor"
										d="M240 64c0-8.8-7.2-16-16-16s-16 7.2-16 16V240H32c-8.8 0-16 7.2-16 16s7.2 16 16 16H208V448c0 8.8 7.2 16 16 16s16-7.2 16-16V272H416c8.8 0 16-7.2 16-16s-7.2-16-16-16H240V64z"
									/>
								</svg>
							)}
						</h2>
						<div
							className="lucency__collapsible__panel"
							style={openPanel !== item ? { display: "none" } : null}
						>
							{content}
						</div>
						<hr />
					</div>
				);
			})}
		</div>
	);
}

export { updateStyles, updateClasses, handleStylesClassesChange };
