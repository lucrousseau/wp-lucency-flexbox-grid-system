import handleStylesClassesChange from './handleStylesClassesChange';

describe( 'handleStylesClassesChange', () => {
	it( 'writes a variable under the given breakpoint', () => {
		const setAttributes = jest.fn();

		handleStylesClassesChange( {
			size: 'md',
			prop: 'gap',
			value: 2,
			key: 'variables',
			unit: 'rem',
			stylesClasses: { full: { classes: {}, variables: {} } },
			setAttributes,
			defaultValue: 1,
		} );

		expect( setAttributes ).toHaveBeenCalledWith( {
			stylesClasses: {
				full: { classes: {}, variables: {} },
				md: { variables: { gap: { value: 2, unit: 'rem' } } },
			},
		} );
	} );

	it( 'removes a property when the value matches the default', () => {
		const setAttributes = jest.fn();

		handleStylesClassesChange( {
			size: 'full',
			prop: 'gap',
			value: 1,
			key: 'variables',
			unit: 'rem',
			stylesClasses: {
				full: {
					variables: { gap: { value: 2, unit: 'rem' } },
				},
			},
			setAttributes,
			defaultValue: 1,
		} );

		expect( setAttributes ).toHaveBeenCalledWith( {
			stylesClasses: {
				full: {
					variables: {},
				},
			},
		} );
	} );
} );
