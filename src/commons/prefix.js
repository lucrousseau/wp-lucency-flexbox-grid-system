export function getPrefix({ size }) {
	return size === "full" ? "" : `--${size}`;
}
