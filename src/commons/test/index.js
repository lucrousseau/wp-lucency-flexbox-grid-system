import { __ } from "@wordpress/i18n";
import { addFilter } from "@wordpress/hooks";
import { createHigherOrderComponent } from "@wordpress/compose";
import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";

const enableOnBlocks = ["core/paragraph"];

const setResponsivePanelAttribute = (settings, name) => {
	if (!enableOnBlocks.includes(name)) return settings;

	return Object.assign({}, settings, {
		attributes: Object.assign({}, settings.attributes, {
			test: { type: "string" },
		}),
	});
};

addFilter(
	"blocks.registerBlockType",
	"lucency-grid/setResponsivePanelAttribute",
	setResponsivePanelAttribute,
);

const addResponsivePanelInspectorControls = createHigherOrderComponent(
	(BlockEdit) => {
		return (props) => {
			if (!enableOnBlocks.includes(props.name)) return <BlockEdit {...props} />;

			const { attributes, setAttributes } = props;
			const { test } = attributes;

			return (
				<>
					<InspectorControls>
						<PanelBody title={__("Custom Controls")}>
							<div>Put your custom controls here.</div>
							<TextControl
								label={__("Test String")}
								value={test}
								onChange={(value) => {
									setAttributes({ test: value });
								}}
							/>
						</PanelBody>
					</InspectorControls>
					<BlockEdit {...props} />
				</>
			);
		};
	},
	"addResponsivePanelInspectorControls",
);

addFilter(
	"editor.BlockEdit",
	"lucency-grid/addResponsivePanelInspectorControls",
	addResponsivePanelInspectorControls,
);

/*
const withToolbarButtonProp = createHigherOrderComponent((BlockListBlock) => {
	return (props) => {
		// If current block is not allowed
		if (!enableOnBlocks.includes(props.name)) {
			return <BlockListBlock {...props} />;
		}

		const { attributes } = props;
		const { test } = attributes;

		if (test && "custom" === test) {
			return <BlockListBlock {...props} className={"has-custom-attribute"} />;
		} else {
			return <BlockListBlock {...props} />;
		}
	};
}, "withToolbarButtonProp");

addFilter(
	"editor.BlockListBlock",
	"custom-attributes/with-toolbar-button-prop",
	withToolbarButtonProp,
);

const saveToolbarButtonAttribute = (extraProps, blockType, attributes) => {
	// Do nothing if it's another block than our defined ones.
	if (enableOnBlocks.includes(blockType.name)) {
		const { test } = attributes;
		if (test && "custom" === test) {
			extraProps.className = classnames(
				extraProps.className,
				"has-custom-attribute",
			);
		}
	}

	return extraProps;
};

addFilter(
	"blocks.getSaveContent.extraProps",
	"custom-attributes/save-toolbar-button-attribute",
	saveToolbarButtonAttribute,
);
*/
