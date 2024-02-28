import { __ } from "@wordpress/i18n";

import {
	PanelBody,
	__experimentalNumberControl as NumberControl,
} from "@wordpress/components";

import { BREAKPOINTS } from "../../abstracts/constants";

import Collapsible from "../Collapsible";

import "./editor.scss";

export function MarginPadding({ marginPadding = {}, setAttributes }) {
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

	const handleMarginPaddingChange = ({ size, prop, direction, value }) => {
		const updatedMarginPadding = {
			...marginPadding,
			[size]: {
				...marginPadding[size],
				[prop]: {
					...(marginPadding[size] ? marginPadding[size][prop] : {}),
					[direction]: value,
				},
			},
		};

		setAttributes({ marginPadding: updatedMarginPadding });
	};

	const createItems = ({
		marginPaddingObject,
		marginPadding,
		handleMarginPaddingChange,
	}) =>
		Object.entries(marginPaddingObject).reduce((acc, [size, props]) => {
			const title = `${__(size.toUpperCase(), "lucidity-flexbox-grid-system")}${
				size !== "full" ? `, ${BREAKPOINTS[size]}px` : ""
			}`;

			const content = Object.entries(props).map(([prop, directions]) => (
				<div key={`${prop}-${size}`}>
					<h3>{__(prop.toUpperCase(), "lucidity-flexbox-grid-system")}</h3>
					<div className="row">
						{Object.entries(directions).map(([direction, value]) => (
							<div className="col" key={`${prop}-${size}-${direction}`}>
								<NumberControl
									label={__(
										direction.toUpperCase(),
										"lucidity-flexbox-grid-system",
									)}
									value={marginPadding?.[size]?.[prop]?.[direction] ?? null}
									onChange={(value) =>
										handleMarginPaddingChange({
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
			));

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
					handleMarginPaddingChange,
				})}
				initialOpenPanel={"full"}
			/>
		</PanelBody>
	);
}

export function updateStyleWithMarginPadding({ marginPadding, style = {} }) {
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
