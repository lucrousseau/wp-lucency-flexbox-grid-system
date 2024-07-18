import { COLUMNS } from "../abstracts/constants";

export default function roundCellDimension({ total, pourcentage }) {
	const setTotal = total || COLUMNS;

	return Math.floor((pourcentage / 100) * setTotal);
}
