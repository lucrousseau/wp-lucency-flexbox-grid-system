import { useSelect } from "@wordpress/data";
import { getBlockType } from "@wordpress/blocks";

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
			const blockDefaultStylesClasses = {};
			const block = blockEditor.getBlock(getClientId);

			if (block) {
				const blockJson = getBlockType(block.name);
				const { stylesClasses, display } = block.attributes;
				Object.assign(blockAttributes, { stylesClasses, display });

				if (blockJson)
					Object.assign(
						blockDefaultStylesClasses,
						blockJson?.attributes?.stylesClasses?.default,
					);
			}

			return {
				childrenBlocks,
				hasChildren,
				childrenCount,
				parentRowClientId,
				blockAttributes,
				blockDefaultStylesClasses,
			};
		},
		[clientId],
	);
}
