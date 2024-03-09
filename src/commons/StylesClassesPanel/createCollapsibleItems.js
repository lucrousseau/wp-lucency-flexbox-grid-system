import { __ } from "@wordpress/i18n";

import { BREAKPOINTS } from "../../abstracts/constants";

import renderControl from "./renderControls";

export default function createCollapsibleItems({
	stylesClasses,
	setAttributes,
}) {
	const stylesClassesObject = Object.fromEntries(
		Object.keys(BREAKPOINTS).map((size) => [size, {}]),
	);

	const handleChange = ({ size, prop, value, key }) => {
		const updatedStylesClasses = {
			...stylesClasses,
			[size]: {
				...stylesClasses[size],
				[key]: {
					...stylesClasses[size]?.[key],
					...(value !== null ? { [prop]: value } : {}),
				},
			},
		};

		setAttributes({ stylesClasses: updatedStylesClasses });
	};

	const createCollapsibleItemsContentAlignements = ({ size }) => {
		const controls = [
			{
				options: [
					{ label: "left", value: "left" },
					{ label: "center", value: "center" },
					{ label: "right", value: "right" },
					{ label: "justify", value: "justify" },
				],
				label: "Text Align",
				prop: "text-align",
			},
			{
				options: [
					{ label: "flex-start", value: "flex-start" },
					{ label: "flex-end", value: "flex-end" },
					{ label: "center", value: "center" },
					{ label: "space-between", value: "space-between" },
					{ label: "space-around", value: "space-around" },
					{ label: "space-evenly", value: "space-evenly" },
				],
				label: "Justify Content",
				prop: "justify-content",
			},
			{
				options: [
					{ label: "flex-start", value: "flex-start" },
					{ label: "flex-end", value: "flex-end" },
					{ label: "center", value: "center" },
					{ label: "baseline", value: "baseline" },
					{ label: "stretch", value: "stretch" },
				],
				label: "Align Items",
				prop: "align-items",
			},
			{
				options: [
					{ label: "flex-start", value: "flex-start" },
					{ label: "flex-end", value: "flex-end" },
					{ label: "center", value: "center" },
					{ label: "space-between", value: "space-between" },
					{ label: "space-around", value: "space-around" },
					{ label: "stretch", value: "stretch" },
				],
				label: "Align Content",
				prop: "align-content",
			},
			{
				options: [
					{ label: "row", value: "row" },
					{ label: "row-reverse", value: "row-reverse" },
					{ label: "column", value: "column" },
					{ label: "column-reverse", value: "column-reverse" },
				],
				label: "Flex Direction",
				prop: "flex-direction",
			},
			{
				options: [
					{ label: "nowrap", value: "nowrap" },
					{ label: "wrap", value: "wrap" },
					{ label: "wrap-reverse", value: "wrap-reverse" },
				],
				label: "Flex Wrap",
				prop: "flex-wrap",
			},
		];

		return (
			<>
				{controls.map(({ options, label, prop }) =>
					renderControl({
						stylesClasses,
						options,
						label,
						prop,
						size,
						handleChange,
					}),
				)}
			</>
		);
	};

	const createCollapsibleItemsContentMargins = ({ size }) => {
		const controls = [
			{
				label: __("Top", "lucidity-flexbox-grid-system"),
				prop: "margin-top",
			},
			{
				label: __("Bottom", "lucidity-flexbox-grid-system"),
				prop: "margin-bottom",
			},
			{
				label: __("Left", "lucidity-flexbox-grid-system"),
				prop: "margin-left",
			},
			{
				label: __("Right", "lucidity-flexbox-grid-system"),
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
						handleChange,
					}),
				)}
			</>
		);
	};

	const createCollapsibleItemsContentPaddings = ({ size }) => {
		const controls = [
			{
				label: __("Top", "lucidity-flexbox-grid-system"),
				prop: "padding-top",
				size,
			},
			{
				label: __("Bottom", "lucidity-flexbox-grid-system"),
				prop: "padding-bottom",
				size,
			},
			{
				label: __("Left", "lucidity-flexbox-grid-system"),
				prop: "padding-left",
				size,
			},
			{
				label: __("Right", "lucidity-flexbox-grid-system"),
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
						handleChange,
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
				<div className="row" style={{ "--gap": "0.25em" }}>
					<ContentFunction size={size} />
				</div>
			</>
		);
	};

	return Object.keys(stylesClassesObject).reduce((collapsibleItems, size) => {
		const title = `${__(size.toUpperCase(), "lucidity-flexbox-grid-system")}${
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
