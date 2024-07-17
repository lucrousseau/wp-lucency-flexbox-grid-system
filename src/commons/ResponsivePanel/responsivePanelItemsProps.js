import { responsivePanelControls } from "./";

const responsivePanelItemsProps = ({
	display,
	size,
	panelProps,
	stylesClasses,
	setAttributes,
	defaultStylesClasses,
}) => {
	const controls = panelProps({
		display,
		size,
	});

	return Object.entries(controls).map(([prop, props]) =>
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
};

export default responsivePanelItemsProps;
