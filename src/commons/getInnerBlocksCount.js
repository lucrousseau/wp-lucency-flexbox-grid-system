import { useSelect } from "@wordpress/data";

export function getInnerBlocksCount({ clientId }) {
	return useSelect(
		(select) => {
			const count = select("core/block-editor").getBlockCount(clientId);

			return {
				hasInnerBlocks: count > 0,
				innerBlocksCount: count,
			};
		},
		[clientId],
	);
}
