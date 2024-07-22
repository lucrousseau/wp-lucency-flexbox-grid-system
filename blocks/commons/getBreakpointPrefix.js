export default function getBreakpointPrefix({ size }) {
	return size === "full" ? "" : `--${size}`;
}
