import { COLUMNS } from "../abstracts/constants";

export function roundCellWidth({ total, pourcentage }) {
	const setTotal = total ?? COLUMNS;

	return Math.floor((pourcentage / 100) * setTotal);
}
