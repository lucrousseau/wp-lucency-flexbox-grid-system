import { __ } from "@wordpress/i18n";

import { PanelBody } from "@wordpress/components";

import Collapsible from "../Collapsible";

import createCollapsibleItems from "./createCollapsibleItems";

import "./editor.scss";

import classnames from "classnames";

function processStylesClasses({ key, stylesClasses, processEntry }) {
	let result = {};

	Object.entries(stylesClasses ?? {}).forEach(([size, props]) => {
		Object.entries(props?.[key] ?? {}).forEach(([prop, value]) => {
			if (value !== undefined && value !== null) {
				const prefix = size === "full" ? "" : `--${size}`;

				processEntry(result, prefix, prop, value);
			}
		});
	});

	return result;
}

export function updateStyles({ stylesClasses }, style = {}) {
	const key = "variables";

	let processed = processStylesClasses({
		key,
		stylesClasses,
		processEntry: (result, prefix, prop, value) => {
			result[`--${prefix}${prop}`] = `${value}rem`;
		},
	});

	return { ...style, ...processed };
}

export function updateClasses({ stylesClasses }, classes = null) {
	const key = "classes";

	let processed = processStylesClasses({
		key,
		stylesClasses,
		processEntry: (result, prefix, prop, value) => {
			result[`${value}${prefix}`] = true;
		},
	});

	return classnames(classes, { ...processed });
}

export default function StylesClassesPanel({
	stylesClasses = {},
	setAttributes,
}) {
	return (
		<PanelBody title={__("Margin & Padding")}>
			<p>
				<em>
					{__(
						"All units are in REM and use sizes for all breakpoints",
						"lucency",
					)}
				</em>
			</p>
			<Collapsible
				items={createCollapsibleItems({ stylesClasses, setAttributes })}
				initialOpenPanel={"full"}
			/>
		</PanelBody>
	);
}
