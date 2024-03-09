import { __ } from "@wordpress/i18n";

import { PanelBody } from "@wordpress/components";

import Collapsible from "../Collapsible";

import createCollapsibleItems from "./createCollapsibleItems";

import "./editor.scss";

export default function AlignementsMarginPadding({
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
