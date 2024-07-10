import { useSelect } from "@wordpress/data";

export function fetchBlockDetails({ clientId }) {
	if (!clientId) return {};

	return useSelect(
		(select) => {
			const blockEditor = select("core/block-editor");
			const innerBlocksCount = blockEditor.getBlockCount(clientId);
			const hasChildren = innerBlocksCount > 0;
			const innerBlocks = blockEditor.getBlocks(clientId);
			const parentClientId = blockEditor.getBlockRootClientId(clientId);

			return {
				innerBlocks,
				hasChildren,
				innerBlocksCount,
				parentClientId,
			};
		},
		[clientId],
	);
}
