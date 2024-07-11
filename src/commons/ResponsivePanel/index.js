import { __ } from "@wordpress/i18n";
import classnames from "classnames";
import { useState } from "@wordpress/element";

import { updateStyles, updateClasses } from "./functions";
import handleStylesClassesChange from "./handleStylesClassesChange";
import responsivePanelControls from "./responsivePanelControls";
import responsivePanelItems from "./responsivePanelItems";

import "./editor.scss";

export default function ResponsivePanel(props) {
	const [openPanel, setOpenPanel] = useState("full");

	const panelItems = Object.entries(responsivePanelItems(props)).map(
		([item, itemProps]) => {
			const { title, content } = itemProps;

			return (
				<div key={item}>
					<h2 onClick={() => setOpenPanel(item)}>
						{title}
						{openPanel !== item && (
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
								<path
									fill="currentColor"
									d="M240 64c0-8.8-7.2-16-16-16s-16 7.2-16 16V240H32c-8.8 0-16 7.2-16 16s7.2 16 16 16H208V448c0 8.8 7.2 16 16 16s16-7.2 16-16V272H416c8.8 0 16-7.2 16-16s-7.2-16-16-16H240V64z"
								/>
							</svg>
						)}
					</h2>
					<div
						className="lucency__collapsible__panel"
						style={openPanel !== item ? { display: "none" } : null}
					>
						<hr />
						{content}
					</div>
					<hr />
				</div>
			);
		},
	);

	return (
		<div className={classnames("lucency__responsivepanel")}>{panelItems}</div>
	);
}

export {
	updateStyles,
	updateClasses,
	responsivePanelControls,
	handleStylesClassesChange,
};
