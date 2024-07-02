import { useSelect } from "@wordpress/data";

export function getInnerBlocksCount({ clientId }) {
	if (!clientId) return {};

	return useSelect(
		(select) => {
			const blockEditor = select("core/block-editor");
			const innerBlocksCount = blockEditor.getBlockCount(clientId);
			const hasInnerBlocks = innerBlocksCount > 0;
			const innerBlocks = blockEditor.getBlocks(clientId);

			return {
				innerBlocks,
				hasInnerBlocks,
				innerBlocksCount,
			};
		},
		[clientId],
	);
}
