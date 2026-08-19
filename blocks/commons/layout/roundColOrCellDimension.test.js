import roundColOrCellDimension from './roundColOrCellDimension';

describe( 'roundColOrCellDimension', () => {
	it( 'maps a percentage onto a 12-column grid', () => {
		expect(
			roundColOrCellDimension( { total: 12, pourcentage: 50 } )
		).toBe( 6 );
	} );

	it( 'defaults the grid size to 12 columns', () => {
		expect( roundColOrCellDimension( { pourcentage: 100 } ) ).toBe( 12 );
	} );

	it( 'floors partial columns', () => {
		expect(
			roundColOrCellDimension( { total: 12, pourcentage: 40 } )
		).toBe( 4 );
	} );
} );
