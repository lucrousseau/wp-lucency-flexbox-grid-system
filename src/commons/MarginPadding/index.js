import React, { useState } from "react";
import classnames from "classnames";
import { __ } from "@wordpress/i18n";

import {
	PanelBody,
	__experimentalNumberControl as NumberControl,
} from "@wordpress/components";

import { BREAKPOINTS } from "../../abstracts/constants";

import "./editor.scss";

export function MarginPadding({ marginPadding = {}, setAttributes }) {
	const [openPanel, setOpenPanel] = useState("full");

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

	const handleClick = (size) => {
		setOpenPanel(size);
	};

	return (
		<PanelBody title={__("Margin & Padding")}>
			<div className={classnames("setMarginPadding")}>
				<p>
					<em>
						{__(
							"All units are in REM and use sizes for all breakpoints",
							"lucidity-flexbox-grid-system",
						)}
					</em>
				</p>
				<hr />
				{Object.entries(marginPaddingObject).map(([size, props]) => (
					<div key={size}>
						<h2 onClick={() => setOpenPanel(size)}>
							{`${__(size.toUpperCase(), "lucidity-flexbox-grid-system")}${
								size !== "full" ? `, ${BREAKPOINTS[size]}px` : ""
							}`}
							{openPanel !== size && (
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
									<path
										fill="currentColor"
										d="M240 64c0-8.8-7.2-16-16-16s-16 7.2-16 16V240H32c-8.8 0-16 7.2-16 16s7.2 16 16 16H208V448c0 8.8 7.2 16 16 16s16-7.2 16-16V272H416c8.8 0 16-7.2 16-16s-7.2-16-16-16H240V64z"
									/>
								</svg>
							)}
						</h2>
						<div
							className="setMarginPadding__collapsible"
							style={openPanel !== size ? { display: "none" } : null}
						>
							{Object.entries(props).map(([prop, directions]) => (
								<div key={`${prop}-${size}`}>
									<h3>
										{__(prop.toUpperCase(), "lucidity-flexbox-grid-system")}
									</h3>
									<div className="setMarginPadding__row">
										{Object.entries(directions).map(([direction, value]) => {
											return (
												<div
													className="setMarginPadding__col"
													key={`${prop}-${size}-${direction}`}
												>
													<NumberControl
														label={__(
															direction.toUpperCase(),
															"lucidity-flexbox-grid-system",
														)}
														value={
															marginPadding?.[size]?.[prop]?.[direction] ?? null
														}
														onChange={(value) => {
															handleMarginPaddingChange({
																size,
																prop,
																direction,
																value,
															});
														}}
														step={0.1}
														isShiftStepEnabled={true}
														shiftStep={10}
													/>
												</div>
											);
										})}
									</div>
								</div>
							))}
						</div>
						<hr />
					</div>
				))}
			</div>
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
