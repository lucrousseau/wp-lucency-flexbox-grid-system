import { layout as icon } from "@wordpress/icons";
import { registerBlockType } from "@wordpress/blocks";

import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";

import "./style.scss";

registerBlockType(metadata.name, {
	icon,
	edit: Edit,
	save,
});
