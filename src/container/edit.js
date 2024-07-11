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

import { fetchRowBlockDetails } from "../row/fetchRowBlockDetails";

import { FLEX_CSS_PROPS } from "../abstracts/constants";

import "./editor.scss";

export default function Edit(props) {
	const { attributes, setAttributes, clientId } = props;
	const { stylesClasses } = attributes;

	const style = updateStyles({ props });

	const { hasChildren } = fetchRowBlockDetails({ clientId });

	const className = updateClasses(
		{ props },
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
	}, [contextDisplay, contextCells, contextParentStylesClasses, className]);

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		renderAppender: !hasChildren
			? () => <InnerBlocks.ButtonBlockAppender />
			: null,
	});

	const responsivePanelBefore = {
		fn: ({ size }) => {
			const controls = FLEX_CSS_PROPS({ display: "container" });

			return Object.entries(controls).map(([prop, props]) =>
				responsivePanelControls({
					clientId,
					attributes,
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
						clientId={clientId}
						enabled={{ margin: true, padding: true }}
						setAttributes={setAttributes}
						responsivePanelBefore={responsivePanelBefore}
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
