import { useState } from "@wordpress/element";
import classnames from "classnames";
import { useSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import {
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
} from "@wordpress/block-editor";

import { PanelBody, Notice, RangeControl } from "@wordpress/components";

import { COLUMNS, BREAKPOINTS } from "../abstracts/constants";

import "./editor.scss";

export default function Edit({ attributes, setAttributes, clientId }) {
	const { sizes } = attributes;
	const [openPanel, setOpenPanel] = useState("full");

	let style = {};

	const { hasInnerBlocks } = useSelect((select) => ({
		hasInnerBlocks: select("core/block-editor").getBlockCount(clientId) > 0,
	}));

	const blockProps = useBlockProps({
		className: classnames("col"),
	});

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		renderAppender: !hasInnerBlocks
			? () => <InnerBlocks.ButtonBlockAppender />
			: null,
	});

	const handleSizeChange = ({ size, value }) => {
		const updatedColumnSize = {
			...sizes,
			[size]: value,
		};

		setAttributes({ sizes: updatedColumnSize });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Column Settings")}>
					<Notice status="warning" isDismissible={true}>
						{__(
							"Comulative column width for sleected breakpoints should not exceed 12 or row will break in another line",
							"lucidity-flexbox-grid-system",
						)}
					</Notice>
					<div
						className={classnames("lucidity-flexbox-grid-system__collapsible")}
					>
						{Object.keys(BREAKPOINTS).map((size) => {
							return (
								<div key={size}>
									<h2 onClick={() => setOpenPanel(size)}>
										{`${__(
											size.toUpperCase(),
											"lucidity-flexbox-grid-system",
										)}${size !== "full" ? `, ${BREAKPOINTS[size]}px` : ""}`}
										{openPanel !== size && (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 448 512"
											>
												<path
													fill="currentColor"
													d="M240 64c0-8.8-7.2-16-16-16s-16 7.2-16 16V240H32c-8.8 0-16 7.2-16 16s7.2 16 16 16H208V448c0 8.8 7.2 16 16 16s16-7.2 16-16V272H416c8.8 0 16-7.2 16-16s-7.2-16-16-16H240V64z"
												/>
											</svg>
										)}
									</h2>
									<div
										className="lucidity-flexbox-grid-system__collapsible__panel"
										style={openPanel !== size ? { display: "none" } : null}
									>
										<RangeControl
											label={__(
												"Columns Eidth",
												"lucidity-flexbox-grid-system",
											)}
											min={0}
											max={COLUMNS}
											value={sizes?.[size] ?? 0}
											onChange={(value) => handleSizeChange({ size, value })}
											help={__(
												"Leave at 0 for auto width",
												"lucidity-flexbox-grid-system",
											)}
										/>
									</div>
									<hr />
								</div>
							);
						})}
					</div>
				</PanelBody>
			</InspectorControls>
			<div {...innerBlocksProps} style={style}></div>
		</>
	);
}
