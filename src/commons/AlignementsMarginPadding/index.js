import { __ } from "@wordpress/i18n";
import classnames from "classnames";
import { PanelBody } from "@wordpress/components";

import Collapsible from "../Collapsible";

import createCollapsibleItems from "./createCollapsibleItems";

import "./editor.scss";

export function AlignementsMarginPadding({
	marginPadding = {},
	setAttributes,
}) {
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
				items={createCollapsibleItems({ marginPadding, setAttributes })}
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
