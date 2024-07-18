export default function getPrefix({ size }) {
	return size === "full" ? "" : `--${size}`;
}
