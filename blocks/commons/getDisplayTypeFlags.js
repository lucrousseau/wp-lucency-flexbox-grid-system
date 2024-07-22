export default function getDisplayTypeFlags({ display }) {
	const isGrid = display === "grid";
	const isFlex = display === "flex";
	const isCell = display === "cell";
	const isColumn = display === "column";
	const isContainer = display === "container";

	return {
		isGrid,
		isFlex,
		isCell,
		isColumn,
		isContainer,
		display,
	};
}
