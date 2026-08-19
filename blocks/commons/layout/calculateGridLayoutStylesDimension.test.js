import calculateGridLayoutStylesDimension from './calculateGridLayoutStylesDimension';

describe( 'calculateGridLayoutStylesDimension', () => {
	it( 'derives a square-ish template from the inner block count', () => {
		expect(
			calculateGridLayoutStylesDimension( {
				innerBlocksCount: 4,
				innerBlocks: [],
			} )
		).toEqual( {
			'--grid-template-columns': '2',
			'--grid-template-rows': '2',
		} );
	} );

	it( 'uses one column for a single cell', () => {
		expect(
			calculateGridLayoutStylesDimension( {
				innerBlocksCount: 1,
				innerBlocks: [],
			} )
		).toEqual( {
			'--grid-template-columns': '1',
			'--grid-template-rows': '1',
		} );
	} );
} );
