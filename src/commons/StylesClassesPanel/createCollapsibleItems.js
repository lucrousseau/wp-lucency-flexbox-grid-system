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

		if (!value) {
			delete updatedStylesClasses[size][key];
		}

		if (Object.keys(updatedStylesClasses[size]).length === 0) {
			delete updatedStylesClasses[size];
		}

		console.log(value, !!value, { updatedStylesClasses });

		setAttributes({ stylesClasses: updatedStylesClasses });
	};

	const createCollapsibleItemsContentAlignements = ({ size }) => {
		const controls = [
			{
				options: [
					{ label: "flex", value: "lucency-flex" },
					{ label: "inline-flex", value: "lucency-inline-flex" },
				],
				label: "Display",
				prop: "display",
			},
			{
				options: [
					{ label: "row", value: "lucency-flex-row" },
					{ label: "row-reverse", value: "lucency-flex-row-reverse" },
					{ label: "column", value: "lucency-flex-column" },
					{ label: "column-reverse", value: "lucency-flex-column-reverse" },
				],
				label: "Flex Direction",
				prop: "flex-direction",
			},
			{
				options: [
					{ label: "wrap", value: "lucency-flex-wrap" },
					{ label: "wrap-reverse", value: "lucency-flex-wrap-reverse" },
					{ label: "nowrap", value: "lucency-flex-wrap-nowrap" },
				],
				label: "Flex Wrap",
				prop: "flex-wrap",
			},
			{
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
				label: "Justify Content",
				prop: "justify-content",
			},
			{
				options: [
					{ label: "flex-start", value: "lucency-items-start" },
					{ label: "flex-end", value: "lucency-items-end" },
					{ label: "center", value: "lucency-items-center" },
					{ label: "baseline", value: "lucency-items-baseline" },
					{ label: "stretch", value: "lucency-items-stretch" },
				],
				label: "Align Items",
				prop: "align-items",
			},
			{
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
				label: "Align Content",
				prop: "align-content",
			},
			{
				options: [
					{ label: "left", value: "lucency-align-left" },
					{ label: "center", value: "lucency-align-center" },
					{ label: "right", value: "lucency-align-right" },
					{ label: "justify", value: "lucency-align-justify" },
				],
				label: "Text Align",
				prop: "text-align",
			},
			{
				label: "Gap",
				prop: "gap",
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
						col: 6,
						handleChange,
					}),
				)}
			</>
		);
	};

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
						handleChange,
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
		//lucency-col

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
