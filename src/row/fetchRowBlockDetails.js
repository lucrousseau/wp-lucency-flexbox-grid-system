import { useSelect } from "@wordpress/data";

export function fetchRowBlockDetails({ clientId }) {
	if (!clientId) return {};

	return useSelect(
		(select) => {
			const blockEditor = select("core/block-editor");
			const childrenCount = blockEditor.getBlockCount(clientId);
			const hasChildren = childrenCount > 0;
			const childrenBlocks = blockEditor.getBlocks(clientId);
			const parentClientId = blockEditor.getBlockRootClientId(clientId);

			const blockAttributes = {};

			if (parentClientId) {
				const block = blockEditor.getBlock(parentClientId);

				if (block) {
					const { styleClasses, display } = block.attributes;
					Object.assign(blockAttributes, { styleClasses, display });
				}
			}

			return {
				childrenBlocks,
				hasChildren,
				childrenCount,
				parentClientId,
				blockAttributes,
			};
		},
		[clientId],
	);
}
