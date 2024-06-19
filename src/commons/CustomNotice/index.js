import { Notice } from "@wordpress/components";

import "./style.scss";

export default function CustomNotice({
	children,
	status,
	isDismissible = false,
}) {
	return (
		<div className="lucency-notice">
			<Notice status={status} isDismissible={isDismissible}>
				{children}
			</Notice>
		</div>
	);
}
