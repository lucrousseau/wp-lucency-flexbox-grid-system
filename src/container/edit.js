import classnames from "classnames";
import { useEffect } from "@wordpress/element";
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
	responsivePanelItemsProps,
} from "../commons/ResponsivePanel";

import { getInnerBlocksCount } from "../commons/getInnerBlocksCount";

import { PANEL_CSS_PROPS } from "../abstracts/constants";

import metadata from "./block.json";

import "./editor.scss";

export default function Edit({ attributes, setAttributes, clientId }) {
	const { stylesClasses } = attributes;

	const defaultStylesClasses = metadata?.attributes?.stylesClasses?.default;

	const style = updateStyles({ stylesClasses, defaultStylesClasses });

	const { hasInnerBlocks } = getInnerBlocksCount({ clientId });

	const className = updateClasses(
		{ stylesClasses, defaultStylesClasses },
		classnames("lucency lucency-container lucency-flex"),
	);

	const blockProps = useBlockProps({
		className,
	});

	useEffect(() => {
		setAttributes({
			className,
			style,
		});
	}, [className]);

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		renderAppender: !hasInnerBlocks
			? () => <InnerBlocks.ButtonBlockAppender />
			: null,
	});

	const responsivePanel = [
		{
			fn: ({ size }) =>
				responsivePanelItemsProps({
					controls: PANEL_CSS_PROPS,
					size,
					stylesClasses,
					setAttributes,
					defaultStylesClasses,
				}),
			title: __("Alignment (rem)", "lucency"),
		},
	];

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Container Settings")}>
					<ResponsivePanel
						stylesClasses={stylesClasses}
						setAttributes={setAttributes}
						defaultStylesClasses={defaultStylesClasses}
						responsivePanel={responsivePanel}
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
