import { __ } from "@wordpress/i18n";

import { BREAKPOINTS } from "../../abstracts/constants";

import {
	__experimentalNumberControl as NumberControl,
	PanelRow,
} from "@wordpress/components";

import { handleChange } from "./";

export default function createCollapsibleItems({
	stylesClasses,
	setAttributes,
	createCollapsibleItemsContentAlignements,
}) {
	const stylesClassesObject = Object.fromEntries(
		Object.keys(BREAKPOINTS).map((size) => [size, {}]),
	);

	const renderControl = ({ stylesClasses, label, prop, size, col = 6 }) => (
		<div className={`lucency-col lucency-col-${col}`}>
			<NumberControl
				label={label}
				value={stylesClasses?.[size]?.variables?.[prop] ?? null}
				onChange={(value) =>
					handleChange({
						size,
						prop,
						value,
						key: "variables",
						stylesClasses,
						setAttributes,
					})
				}
				step={0.1}
				isShiftStepEnabled={true}
				shiftStep={10}
			/>
		</div>
	);

	const createCollapsibleItemsContentMargins = ({ size }) => {
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

	const createCollapsibleItemsContentPaddings = ({ size }) => {
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
						col: 3,
					}),
				)}
			</>
		);
	};

	const createCollapsibleItemsContent = ({ title, size, fn }) => {
		const functionMap = {
			createCollapsibleItemsContentAlignements,
			createCollapsibleItemsContentMargins,
			createCollapsibleItemsContentPaddings,
		};

		const ContentFunction = functionMap[fn];

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

	return Object.keys(stylesClassesObject).reduce((collapsibleItems, size) => {
		const title = `${__(size.toUpperCase(), "lucency")}${
			size !== "full" ? `, ${BREAKPOINTS[size]}px` : ""
		}`;

		const content = (
			<div className="stylesClassesPanel">
				{createCollapsibleItemsContent({
					title: "Alignments",
					fn: "createCollapsibleItemsContentAlignements",
					size,
				})}
				{createCollapsibleItemsContent({
					title: "Margins",
					fn: "createCollapsibleItemsContentMargins",
					size,
				})}
				{createCollapsibleItemsContent({
					title: "Paddings",
					fn: "createCollapsibleItemsContentPaddings",
					size,
				})}
			</div>
		);

		collapsibleItems[size] = { title, content };
		return collapsibleItems;
	}, {});
}
