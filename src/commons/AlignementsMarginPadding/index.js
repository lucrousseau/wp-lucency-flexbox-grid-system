import { __ } from "@wordpress/i18n";
import classnames from "classnames";
import {
	PanelBody,
	SelectControl,
	__experimentalNumberControl as NumberControl,
} from "@wordpress/components";

import { BREAKPOINTS } from "../../abstracts/constants";

import Collapsible from "../Collapsible";

import "./editor.scss";

export function AlignementsMarginPadding({
	marginPadding = {},
	setAttributes,
}) {
	const marginPaddingObject = Object.fromEntries(
		Object.keys(BREAKPOINTS).map((size) => [size, {}]),
	);

	const handleChange = (props) => {
		const { size, prop, value, type = "variables" } = props;

		const updatedMarginPadding = {
			...marginPadding,
			[size]: {
				...marginPadding[size],
				[type]: {
					...marginPadding[size]?.[type],
					[prop]: value,
				},
			},
		};

		setAttributes({ marginPadding: updatedMarginPadding });
	};

	const renderSelectControl = (props) => {
		const { options, label, prop, size } = props;
		const setOptions = [...[{ label: "", value: null }], ...options];

		return (
			<>
				<div className="col col--6">
					<SelectControl
						label={label}
						value={marginPadding?.[size]?.classes?.[prop]}
						options={setOptions}
						onChange={(value) =>
							handleChange({
								size,
								prop,
								value,
								type: "classes",
							})
						}
						__nextHasNoMarginBottom
					/>
				</div>
			</>
		);
	};

	const renderNumberControl = (props) => {
		const { label, prop, size } = props;

		return (
			<div className="col col--3">
				<NumberControl
					label={label}
					value={marginPadding?.[size]?.variables?.[prop] ?? null}
					onChange={(value) =>
						handleChange({
							size,
							prop,
							value,
							type: "variables",
						})
					}
					step={0.1}
					isShiftStepEnabled={true}
					shiftStep={10}
				/>
			</div>
		);
	};

	const createItems = ({ marginPaddingObject, marginPadding, handleChange }) =>
		Object.entries(marginPaddingObject).reduce((acc, [size, props]) => {
			const title = `${__(size.toUpperCase(), "lucidity-flexbox-grid-system")}${
				size !== "full" ? `, ${BREAKPOINTS[size]}px` : ""
			}`;

			const content = (
				<div className="AlignementsMarginPadding">
					<h2>{"Alignements"}</h2>
					<div className="row" style={{ "--gap": "0.25em" }}>
						{renderSelectControl({
							options: [
								{ label: "left", value: "left" },
								{ label: "center", value: "center" },
								{ label: "right", value: "right" },
								{ label: "justify", value: "justify" },
							],
							label: "Text Align",
							prop: "text-align",
							size,
						})}
						{renderSelectControl({
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
							size,
						})}
						{renderSelectControl({
							options: [
								{ label: "flex-start", value: "flex-start" },
								{ label: "flex-end", value: "flex-end" },
								{ label: "center", value: "center" },
								{ label: "baseline", value: "baseline" },
								{ label: "stretch", value: "stretch" },
							],
							label: "Align Items",
							prop: "align-items",
							size,
						})}
						{renderSelectControl({
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
							size,
						})}
						{renderSelectControl({
							options: [
								{ label: "row", value: "row" },
								{ label: "row-reverse", value: "row-reverse" },
								{ label: "column", value: "column" },
								{ label: "column-reverse", value: "column-reverse" },
							],
							label: "Flex Direction",
							prop: "flex-direction",
							size,
						})}
						{renderSelectControl({
							options: [
								{ label: "nowrap", value: "nowrap" },
								{ label: "wrap", value: "wrap" },
								{ label: "wrap-reverse", value: "wrap-reverse" },
							],
							label: "Flex Wrap",
							prop: "flex-wrap",
							size,
						})}
					</div>
					<h2>{__("Margins", "lucidity-flexbox-grid-system")}</h2>
					<div className="row" style={{ "--gap": "0.25em" }}>
						{renderNumberControl({
							label: __("Top", "lucidity-flexbox-grid-system"),
							prop: "margin-top",
							size,
						})}
						{renderNumberControl({
							label: __("Bottom", "lucidity-flexbox-grid-system"),
							prop: "margin-bottom",
							size,
						})}
						{renderNumberControl({
							label: __("Left", "lucidity-flexbox-grid-system"),
							prop: "margin-left",
							size,
						})}
						{renderNumberControl({
							label: __("Right", "lucidity-flexbox-grid-system"),
							prop: "margin-right",
							size,
						})}
					</div>
					<h2>{__("Paddings", "lucidity-flexbox-grid-system")}</h2>
					<div className="row" style={{ "--gap": "0.25em" }}>
						{renderNumberControl({
							label: __("Top", "lucidity-flexbox-grid-system"),
							prop: "padding-top",
							size,
						})}
						{renderNumberControl({
							label: __("Bottom", "lucidity-flexbox-grid-system"),
							prop: "padding-bottom",
							size,
						})}
						{renderNumberControl({
							label: __("Left", "lucidity-flexbox-grid-system"),
							prop: "padding-left",
							size,
						})}
						{renderNumberControl({
							label: __("Right", "lucidity-flexbox-grid-system"),
							prop: "padding-right",
							size,
						})}
					</div>
				</div>
			);

			acc[size] = { title, content };
			return acc;
		}, {});

	return (
		<PanelBody title={__("Margin & Padding")}>
			<p>
				<em>
					{__(
						"All units are in REM and use sizes for all breakpoints",
						"lucidity-flexbox-grid-system",
					)}
				</em>
			</p>
			<Collapsible
				items={createItems({
					marginPaddingObject,
					marginPadding,
					handleChange,
				})}
				initialOpenPanel={"full"}
			/>
		</PanelBody>
	);
}

export function updateStyles({ marginPadding, style = {} }) {
	let newStyle = { ...style };

	Object.entries(marginPadding ?? {}).forEach(([size, props]) => {
		Object.entries(props?.variables ?? {}).forEach(([prop, value]) => {
			if (value !== undefined && value !== null) {
				const prefix = size === "full" ? "" : `${size}-`;
				newStyle[`--${prefix}${prop}`] = `${value}rem`;
			}
		});
	});

	return newStyle;
}

export function updateClasses({ marginPadding, classes = {} }) {
	let newClasses = { ...classes };

	Object.entries(marginPadding ?? {}).forEach(([size, props]) => {
		Object.entries(props?.classes ?? {}).forEach(([prop, value]) => {
			if (value !== undefined && value !== null) {
				const prefix = size === "full" ? "" : `${size}-`;
				newClasses[`${prefix}${prop}-${value}`] = true;
			}
		});
	});

	return classnames(newClasses);
}
