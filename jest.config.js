const jestConfig = require( '@wordpress/scripts/config/jest-unit.config' );

module.exports = {
	...jestConfig,
	rootDir: __dirname,
	moduleNameMapper: {
		...( jestConfig.moduleNameMapper || {} ),
		'^@wordpress/i18n$': '<rootDir>/test/mocks/wordpress-i18n.js',
	},
	testMatch: [ '<rootDir>/blocks/**/*.test.js' ],
	testPathIgnorePatterns: [ '/node_modules/', '/vendor/', '/build/' ],
};
