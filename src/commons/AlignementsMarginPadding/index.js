import { __ } from "@wordpress/i18n";
import classnames from "classnames";
import {
	PanelBody,
	__experimentalNumberControl as NumberControl,
} from "@wordpress/components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAlignLeft,
	faAlignCenter,
	faAlignRight,
	faAlignJustify,
	faObjectsAlignLeft,
	faObjectsAlignCenterHorizontal,
	faObjectsAlignRight,
	faDistributeSpacingHorizontal,
	faObjectsAlignTop,
	faObjectsAlignCenterVertical,
	faObjectsAlignBottom,
	faDistributeSpacingVertical,
	faArrowRight,
	faArrowDown,
	faArrowLeftToLine,
	faArrowRightToLine,
	faBackward,
	faForward,
} from "@fortawesome/pro-solid-svg-icons";

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

	const handleChange = ({ group, value, size, prop, direction }) => {
		let updatedMarginPadding = {};

		if (group) {
			updatedMarginPadding = {
				...marginPadding,
				[group]: value,
			};

			if (value === null) delete updatedMarginPadding[group];
		} else {
			updatedMarginPadding = {
				...marginPadding,
				[size]: {
					...marginPadding[size],
					[prop]: {
						...(marginPadding[size] ? marginPadding[size][prop] : {}),
						[direction]: value,
					},
				},
			};
		}

		setAttributes({ marginPadding: updatedMarginPadding });
	};

	const renderRadioGroup = ({ options, group }) => (
		<div className="col col--6">
			<h3>{__(group)}</h3>
			<div className="row" style={{ "--gap": "0.25em" }}>
				{options.map(({ icon, value }) => {
					const id = `${group}-${value}`;
					const checked = marginPadding[group] === value;

					return (
						<div
							className={classnames("AlignementsMarginPadding__radio", {
								[`AlignementsMarginPadding__radio--checked`]: checked,
							})}
							key={value}
						>
							<label htmlFor={id}>
								<input
									type="radio"
									id={id}
									name={group}
									value={value}
									checked={checked}
									onClick={(v) => {
										handleChange({
											group,
											value:
												v.target.value !== marginPadding[group] ? value : null,
										});
									}}
								/>
								<FontAwesomeIcon icon={icon} />
							</label>
						</div>
					);
				})}
			</div>
		</div>
	);

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
								{ icon: faAlignLeft, value: "left" },
								{ icon: faAlignCenter, value: "center" },
								{ icon: faAlignRight, value: "right" },
								{ icon: faAlignJustify, value: "justify" },
							],
							group: "Text",
							prop: "align",
						})}
						{renderRadioGroup({
							options: [
								{ icon: faObjectsAlignLeft, value: "faObjectsAlignLeft" },
								{
									icon: faObjectsAlignCenterHorizontal,
									value: "faObjectsAlignCenterHorizontal",
								},
								{ icon: faObjectsAlignRight, value: "faObjectsAlignRight" },
								{
									icon: faDistributeSpacingHorizontal,
									value: "faDistributeSpacingHorizontal",
								},
							],
							group: "Horizontal",
							prop: "justify-content",
						})}
						{renderRadioGroup({
							options: [
								{ icon: faObjectsAlignTop, value: "faObjectsAlignTop" },
								{
									icon: faObjectsAlignCenterVertical,
									value: "faObjectsAlignCenterVertical",
								},
								{ icon: faObjectsAlignBottom, value: "faObjectsAlignBottom" },
								{
									icon: faDistributeSpacingVertical,
									value: "faDistributeSpacingVertical",
								},
							],
							group: "Vertical",
							prop: "align-content",
						})}
						{renderRadioGroup({
							options: [
								{ icon: faArrowRight, value: "faArrowRight" },
								{
									icon: faArrowDown,
									value: "faArrowDown",
								},
							],
							group: "Direction",
							prop: "flex-direction",
						})}
						{renderRadioGroup({
							options: [
								{ icon: faArrowLeftToLine, value: "faArrowLeftToLine" },
								{
									icon: faArrowRightToLine,
									value: "faArrowRightToLine",
								},
							],
							group: "Pull",
							prop: "margin",
						})}
						{renderRadioGroup({
							options: [
								{ icon: faBackward, value: "faBackward" },
								{ icon: faForward, value: "faForward" },
							],
							group: "Reverse",
							prop: "flex-direction",
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
											value={marginPadding?.[size]?.[prop]?.[direction] ?? null}
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
