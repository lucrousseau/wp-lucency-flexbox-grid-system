import { __ } from "@wordpress/i18n";

import { PanelBody } from "@wordpress/components";

import Collapsible from "../Collapsible";

import createCollapsibleItems from "./createCollapsibleItems";

import "./editor.scss";

import classnames from "classnames";

function processStylesClasses({ key, marginPadding, processEntry }) {
	let result = {};

	Object.entries(marginPadding ?? {}).forEach(([size, props]) => {
		Object.entries(props?.[key] ?? {}).forEach(([prop, value]) => {
			if (value !== undefined && value !== null) {
				const prefix = size === "full" ? "" : `${size}-`;

				processEntry(result, prefix, prop, value);
			}
		});
	});

	return result;
}

export function updateStyles({ marginPadding, style = {} }) {
	const key = "variables";

	let processed = processStylesClasses({
		key,
		marginPadding,
		processEntry: (result, prefix, prop, value) => {
			result[`--${prefix}${prop}`] = `${value}rem`;
		},
	});

	return { ...style, ...processed };
}

export function updateClasses({ marginPadding, classes = {} }) {
	const key = "classes";

	let processed = processStylesClasses({
		key,
		marginPadding,
		processEntry: (result, prefix, prop, value) => {
			result[`${prefix}${prop}-${value}`] = true;
		},
	});

	return classnames({ ...classes, ...processed });
}

export default function StylesClassesPanel({
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
