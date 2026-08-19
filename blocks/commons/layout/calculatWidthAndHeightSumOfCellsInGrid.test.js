import calculatWidthAndHeightSumOfCellsInGrid from './calculatWidthAndHeightSumOfCellsInGrid';

describe( 'calculatWidthAndHeightSumOfCellsInGrid', () => {
	it( 'returns an empty object when there are no inner blocks', () => {
		expect(
			calculatWidthAndHeightSumOfCellsInGrid( {
				innerBlocksCount: 0,
				innerBlocks: [],
			} )
		).toEqual( {} );
	} );

	it( 'accumulates width and height per breakpoint', () => {
		const result = calculatWidthAndHeightSumOfCellsInGrid( {
			innerBlocksCount: 4,
			innerBlocks: [
				{ attributes: { width: { full: 50 }, height: { full: 50 } } },
				{ attributes: { width: { full: 50 }, height: { full: 50 } } },
				{ attributes: { width: { full: 50 }, height: { full: 50 } } },
				{ attributes: { width: { full: 50 }, height: { full: 50 } } },
			],
		} );

		expect( result.full.width ).toBe( 4 );
		expect( result.full.height ).toBe( 4 );
	} );
} );
