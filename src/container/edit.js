import classnames from "classnames";
import { useSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import {
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
} from "@wordpress/block-editor";

import { PanelBody } from "@wordpress/components";

import ResponsivePanel, {
	updateStyles,
	updateClasses,
	responsivePanelControls,
} from "../commons/ResponsivePanel";

import { getInnerBlocksCount } from "../commons/getInnerBlocksCount";

import { FLEX_CSS_PROPS } from "../abstracts/constants";

import metadata from "./block.json";

import "./editor.scss";

export default function Edit({ attributes, setAttributes, clientId }) {
	const { stylesClasses } = attributes;

	const defaultStylesClasses = metadata?.attributes?.stylesClasses?.default;

	const style = updateStyles({ stylesClasses, defaultStylesClasses });

	const { hasInnerBlocks } = getInnerBlocksCount({ clientId });

	const blockProps = useBlockProps({
		className: updateClasses(
			{ stylesClasses, defaultStylesClasses },
			classnames("lucency lucency-container lucency-flex"),
		),
	});

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		renderAppender: !hasInnerBlocks
			? () => <InnerBlocks.ButtonBlockAppender />
			: null,
	});

	const responsivePanelBefore = {
		fn: ({ size }) => {
			const controls = FLEX_CSS_PROPS({ display: "container" });

			return Object.entries(controls).map(([prop, props]) =>
				responsivePanelControls({
					stylesClasses,
					setAttributes,
					size,
					col: 6,
					prop,
					...props,
				}),
			);
		},
		title: __("Alignment", "lucency"),
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Container Settings")}>
					<ResponsivePanel
						enabled={{ margin: true, padding: true }}
						stylesClasses={stylesClasses}
						setAttributes={setAttributes}
						responsivePanelBefore={responsivePanelBefore}
						defaultStylesClasses={defaultStylesClasses}
					/>
				</PanelBody>
			</InspectorControls>
			<section {...blockProps} style={style}>
				<div
					{...innerBlocksProps}
					className="lucency-col lucency-container__content"
				></div>
			</section>
		</>
	);
}
