import { isEmpty, sanitizeString } from './index';

describe( 'helpers', () => {
	it( 'detects empty objects', () => {
		expect( isEmpty( {} ) ).toBe( true );
		expect( isEmpty( { a: 1 } ) ).toBe( false );
	} );

	it( 'slugifies strings and strips unsafe characters', () => {
		expect( sanitizeString( ' Hello World! ' ) ).toBe( 'hello-world' );
		expect( sanitizeString( 'lucency--flex' ) ).toBe( 'lucency-flex' );
	} );
} );
