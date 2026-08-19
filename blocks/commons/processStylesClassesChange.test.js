import { updateStyles, updateClasses } from './processStylesClassesChange';

describe( 'processStylesClassesChange', () => {
	it( 'maps known CSS variables to custom properties', () => {
		const style = updateStyles( {
			display: 'flex',
			stylesClasses: {
				full: {
					variables: {
						gap: { value: 2, unit: 'rem' },
					},
				},
				md: {
					variables: {
						gap: { value: 1, unit: 'rem' },
					},
				},
			},
			defaultStylesClasses: {
				full: {
					variables: {
						gap: { value: 1, unit: 'rem' },
					},
				},
			},
		} );

		expect( style ).toEqual( {
			'--gap': '2rem',
			'--gap--md': '1rem',
		} );
	} );

	it( 'ignores variables that are not in the control schema', () => {
		const style = updateStyles( {
			display: 'flex',
			stylesClasses: {
				full: {
					variables: {
						background: { value: 'red', unit: '' },
					},
				},
			},
		} );

		expect( style ).toEqual( {} );
	} );

	it( 'appends known utility classes with a breakpoint suffix', () => {
		const className = updateClasses( {
			display: 'flex',
			stylesClasses: {
				full: {
					classes: {
						'flex-direction': { value: 'lucency-flex-row' },
					},
				},
				lg: {
					classes: {
						'flex-direction': { value: 'lucency-flex-column' },
					},
				},
			},
			defaultStylesClasses: {
				full: {
					classes: {
						'flex-direction': { value: 'lucency-flex-row' },
					},
				},
			},
		} );

		expect( className ).toBe( 'lucency-flex-column--lg' );
	} );
} );
