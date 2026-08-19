import getBreakpointPrefix from './getBreakpointPrefix';

describe( 'getBreakpointPrefix', () => {
	it( 'returns an empty prefix for the base (full) breakpoint', () => {
		expect( getBreakpointPrefix( { size: 'full' } ) ).toBe( '' );
	} );

	it( 'prefixes named breakpoints', () => {
		expect( getBreakpointPrefix( { size: 'md' } ) ).toBe( '--md' );
	} );
} );
