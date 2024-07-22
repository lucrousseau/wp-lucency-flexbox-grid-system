import classnames from "classnames";
import { useEffect, useMemo, useCallback } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import {
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";

import ResponsivePanel, {
	responsivePanelItemsProps,
} from "../commons/ResponsivePanel";
import {
	updateStyles,
	updateClasses,
} from "../commons/processStylesClassesChange";
import fetchBlockDetails from "../commons/fetchBlockDetails";

import { PANEL_CSS_PROPS } from "../abstracts/constants";

import metadata from "./block.json";

export default function Edit(props) {
	const { attributes, setAttributes, clientId } = props;
	const { stylesClasses } = attributes;

	const defaultStylesClasses = metadata?.attributes?.stylesClasses?.default;

	const { hasInnerBlocks } = fetchBlockDetails({ clientId });

	const setProps = {
		stylesClasses,
		setAttributes,
		defaultStylesClasses,
		...props,
	};

	const className = useMemo(
		() =>
			updateClasses(
				setProps,
				classnames("lucency lucency-container lucency-flex"),
			),
		[setProps],
	);

	const style = useMemo(() => updateStyles(setProps), [setProps]);

	const blockProps = useBlockProps({
		className,
	});

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		renderAppender: !hasInnerBlocks
			? () => <InnerBlocks.ButtonBlockAppender />
			: null,
	});

	const responsivePanel = useMemo(
		() => [
			{
				fn: ({ size }) =>
					responsivePanelItemsProps({
						controls: PANEL_CSS_PROPS,
						size,
						...setProps,
					}),
				title: __("Alignment (rem)", "lucency"),
			},
		],
		[setProps],
	);

	useEffect(() => {
		setAttributes({
			className,
			style,
		});
	}, [className]);

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Container Settings")}>
					<ResponsivePanel {...{ responsivePanel, ...setProps }} />
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
