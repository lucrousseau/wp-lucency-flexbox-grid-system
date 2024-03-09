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
	const marginPaddingObject = (() => {
		const directions = ["top", "bottom", "left", "right"];
		const obj = {};
		Object.keys(BREAKPOINTS).map((size) => {
			obj[size] = { margin: {}, padding: {} };
			directions.forEach((direction) => {
				obj[size].margin[direction] = null;
				obj[size].padding[direction] = null;
			});
		});
		return obj;
	})();

	const handleChange = (props) => {
		const { size, prop, value, direction } = props;

		const updateVariables = () => ({
			...(marginPadding[size]?.variables ?? {}),
			variables: {
				...(marginPadding[size]?.variables ?? {}),
				[prop]: {
					...(marginPadding[size]?.variables?.[prop] ?? {}),
					[direction]: value,
				},
			},
		});

		const updateClasses = () => ({
			...(marginPadding[size]?.classes ?? {}),
			classes: {
				...(marginPadding[size]?.classes ?? {}),
				[prop]: value,
			},
		});

		let updatedAttributes = {
			...marginPadding,
			[size]: {
				...marginPadding[size],
				...(direction ? updateVariables() : updateClasses()),
			},
		};

		if (value === null && !direction) {
			delete updatedAttributes[size].classes[prop];
			if (Object.keys(updatedAttributes[size].classes).length === 0) {
				delete updatedAttributes[size].classes;
			}
		}

		setAttributes({ marginPadding: updatedAttributes });
	};

	const renderRadioGroup = (props) => {
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
							})
						}
						__nextHasNoMarginBottom
					/>
				</div>
			</>
		);
	};

	const createItems = ({ marginPaddingObject, marginPadding, handleChange }) =>
		Object.entries(marginPaddingObject).reduce((acc, [size, props]) => {
			const title = `${__(size.toUpperCase(), "lucidity-flexbox-grid-system")}${
				size !== "full" ? `, ${BREAKPOINTS[size]}px` : ""
			}`;

			const content = (
				<div className="AlignementsMarginPadding">
					<h3>{"Alignements"}</h3>
					<div className="row" style={{ "--gap": "0.25em" }}>
						{renderRadioGroup({
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
						{renderRadioGroup({
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
						{renderRadioGroup({
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
						{renderRadioGroup({
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
						{renderRadioGroup({
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
						{renderRadioGroup({
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
					{Object.entries(props).map(([prop, directions]) => (
						<div key={`${prop}-${size}`}>
							<h3>{__(prop.toUpperCase(), "lucidity-flexbox-grid-system")}</h3>
							<div className="row" style={{ "--gap": "0.25em" }}>
								{Object.keys(directions).map((direction) => (
									<div className="col" key={`${prop}-${size}-${direction}`}>
										<NumberControl
											label={__(
												direction.toUpperCase(),
												"lucidity-flexbox-grid-system",
											)}
											value={
												marginPadding?.[size]?.variables?.[prop]?.[direction] ??
												null
											}
											onChange={(value) =>
												handleChange({
													size,
													prop,
													direction,
													value,
												})
											}
											step={0.1}
											isShiftStepEnabled={true}
											shiftStep={10}
										/>
									</div>
								))}
							</div>
						</div>
					))}
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
		Object.entries(props ?? {}).forEach(([prop, directions]) => {
			Object.entries(directions ?? {}).forEach(([direction, value]) => {
				if (value !== undefined && value !== null) {
					const prefix = size === "full" ? "" : `-${size}`;
					newStyle[`--${prop}${prefix}-${direction}`] = `${value}rem`;
				}
			});
		});
	});

	return newStyle;
}
