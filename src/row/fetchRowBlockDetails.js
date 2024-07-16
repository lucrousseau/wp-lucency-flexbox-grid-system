import { useSelect } from "@wordpress/data";

export function fetchRowBlockDetails({ clientId }) {
	if (!clientId) return {};

	return useSelect(
		(select) => {
			let getClientId = clientId;
			const blockEditor = select("core/block-editor");
			const blockName = blockEditor.getBlockName(getClientId);
			const parentRowClientId = blockEditor.getBlockRootClientId(getClientId);

			const isColumn = blockName === "lucency-grid/column";
			if (isColumn) getClientId = parentRowClientId;

			const childrenCount = blockEditor.getBlockCount(getClientId);
			const childrenBlocks = blockEditor.getBlocks(getClientId);
			const hasChildren = childrenCount > 0;

			const blockAttributes = {};
			const block = blockEditor.getBlock(getClientId);

			if (block) {
				const { stylesClasses, display } = block.attributes;
				Object.assign(blockAttributes, { stylesClasses, display });
			}

			return {
				childrenBlocks,
				hasChildren,
				childrenCount,
				parentRowClientId,
				blockAttributes,
			};
		},
		[clientId],
	);
}
