import getDisplayTypeFlags from './getDisplayTypeFlags';

describe( 'getDisplayTypeFlags', () => {
	it( 'flags a grid display', () => {
		expect( getDisplayTypeFlags( { display: 'grid' } ) ).toMatchObject( {
			isGrid: true,
			isFlex: false,
			isCell: false,
			isColumn: false,
			isContainer: false,
			display: 'grid',
		} );
	} );

	it( 'flags a flex display', () => {
		expect( getDisplayTypeFlags( { display: 'flex' } ) ).toMatchObject( {
			isGrid: false,
			isFlex: true,
		} );
	} );
} );
