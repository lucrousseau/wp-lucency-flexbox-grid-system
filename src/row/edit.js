import classnames from "classnames";
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
} from "@wordpress/block-editor";

import { PanelBody } from "@wordpress/components";

import {
	setDisplayPropValue,
	getDisplayPropValue,
} from "../commons/displayPropValue";

import CustomNotice from "../commons/CustomNotice";

import { fetchRowBlockDetails } from "./fetchRowBlockDetails";
import { updateStylesCustomFn } from "./updateStylesCustomFn";
import { generateLayoutStyles } from "./generateLayoutStyles";

import ResponsivePanel, {
	updateStyles,
	updateClasses,
	responsivePanelControls,
} from "../commons/ResponsivePanel";

import ColumnAppender from "./ColumnAppender";
import ColumnAppenderPopUp from "./ColumnAppenderPopUp";

import { COLUMNS } from "../abstracts/constants";
import { FLEX_CSS_PROPS } from "../abstracts/constants";

import "./editor.scss";

export default function Edit(props) {
	const { attributes, setAttributes, clientId, isSelected } = props;
	const { display } = attributes;
	const { isFlex } = getDisplayPropValue({ display });
	const { hasChildren, childrenCount, blockDefaultStylesClasses } =
		fetchRowBlockDetails({
			clientId,
		});
	const updatedProps = { blockDefaultStylesClasses, ...props };

	const className = updateClasses(
		{ clientId, params: { display } },
		classnames("lucency", `lucency-${display}`),
	);

	const blockProps = useBlockProps({ className });

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: ["lucency-grid/column"],
		renderAppender: () => {
			if (!hasChildren) return <ColumnAppenderPopUp {...updatedProps} />;
			if (isSelected) return <ColumnAppender {...updatedProps} />;

			return null;
		},
	});

	const { children: innerBlocksPropsChildren } = innerBlocksProps;

	const style = updateStyles({
		clientId,
		fn: updateStylesCustomFn,
		params: { display },
	});

	const styleAndIfDefaultGridDimensions = generateLayoutStyles({
		style,
		clientId,
	});

	const responsivePanelBefore = {
		fn: ({ size }) => {
			const controls = FLEX_CSS_PROPS({ display, size });

			return Object.entries(controls).map(([prop, itemProps]) =>
				responsivePanelControls({
					size,
					col: 6,
					prop,
					...updatedProps,
					...itemProps,
				}),
			);
		},
		title: __("Alignment", "lucency"),
	};

	useEffect(() => {
		setAttributes({
			style: styleAndIfDefaultGridDimensions,
			className,
		});
	}, [className]);

	const showNotice = childrenCount >= COLUMNS + 1 && isFlex;

	return (
		<>
			{hasChildren && (
				<InspectorControls>
					<PanelBody title={__("Layout Settings", "lucency")}>
						{setDisplayPropValue({
							onChange: (value) => setAttributes({ display: value }),
							value: display,
						})}
					</PanelBody>
					<PanelBody title={__("Responsive Settings", "lucency")}>
						<ResponsivePanel
							{...{
								enabled: { margin: true, padding: true },
								responsivePanelBefore,
								...updatedProps,
							}}
						/>
					</PanelBody>
				</InspectorControls>
			)}
			<div {...innerBlocksProps} style={styleAndIfDefaultGridDimensions}>
				{showNotice && isSelected && (
					<CustomNotice status="error" isDismissible={false}>
						{__(
							`This block is intended to be used with ${COLUMNS} columns. Having more can lead to unexpected results.`,
							"lucency",
						)}
					</CustomNotice>
				)}
				{innerBlocksPropsChildren}
			</div>
		</>
	);
}
