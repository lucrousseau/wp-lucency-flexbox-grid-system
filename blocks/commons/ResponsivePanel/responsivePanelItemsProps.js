import responsivePanelControls from "./responsivePanelControls";

const responsivePanelItemsProps = ({
	controls,
	size,
	display,
	stylesClasses,
	setAttributes,
	defaultStylesClasses,
}) =>
	Object.entries(controls({ display, size })).map(([prop, props]) =>
		responsivePanelControls({
			size,
			col: 6,
			prop,
			stylesClasses,
			setAttributes,
			defaultStylesClasses,
			...props,
		}),
	);
export default responsivePanelItemsProps;
