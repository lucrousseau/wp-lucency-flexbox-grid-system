import { useSelect } from "@wordpress/data";

export function fetchBlockDetails({ clientId }) {
	if (!clientId) return {};

	return useSelect(
		(select) => {
			const blockEditor = select("core/block-editor");
			const childrenCount = blockEditor.getBlockCount(clientId);
			const hasChildren = childrenCount > 0;
			const childrenBlocks = blockEditor.getBlocks(clientId);
			const parentClientId = blockEditor.getBlockRootClientId(clientId);

			return {
				childrenBlocks,
				hasChildren,
				childrenCount,
				parentClientId,
			};
		},
		[clientId],
	);
}
