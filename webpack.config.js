const fs = require('fs');
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const pkg = require('./package.json');
const wpConfig = require('@wordpress/scripts/config/webpack.config');

const breakpoints = JSON.parse(
	fs.readFileSync(path.resolve(__dirname, 'breakpoints.json'))
);

const breakpointVariables = Object.entries(breakpoints)
	.map(([key, value]) => `$${key}: ${value};`)
	.join('\n');

class VersionSyncPlugin {
	apply(compiler) {
		compiler.hooks.done.tap('VersionSyncPlugin', () => {
			const filePath = path.resolve(
				__dirname,
				'wp-lucency-flexbox-grid-system.php'
			);
			const versionRegex = /Version:\s*\d+\.\d+\.\d+/;
			const constantRegex =
				/define\(\s*'LUCENCY_VERSION',\s*'\d+\.\d+\.\d+'\s*\)/;

			try {
				let content = fs.readFileSync(filePath, 'utf8');
				content = content.replace(versionRegex, `Version: ${pkg.version}`);
				content = content.replace(
					constantRegex,
					`define( 'LUCENCY_VERSION', '${pkg.version}' )`
				);
				fs.writeFileSync(filePath, content, 'utf8');
				console.log('Version updated in PHP file.');
			} catch (error) {
				console.error('Error occurred while updating the version:', error);
			}
		});
	}
}

const createPlugins = () => [
	new CleanWebpackPlugin({
		cleanOnceBeforeBuildPatterns: ['**/*'],
	}),
	new MiniCssExtractPlugin({
		filename: '[name]-[contenthash].css',
		chunkFilename: '[name]-[chunkhash].css',
	}),
	new WebpackAssetsManifest(),
	new WebpackNotifierPlugin(),
	new VersionSyncPlugin(),
];

const createOptimization = () => ({
	minimizer: [
		new CssMinimizerPlugin({
			minify: CssMinimizerPlugin.cssnanoMinify,
		}),
	],
});

const createCssRule = () => ({
	test: /\.(sa|sc|c)ss$/,
	use: [
		MiniCssExtractPlugin.loader,
		'css-loader',
		{
			loader: 'postcss-loader',
			options: {
				postcssOptions: {
					plugins: ['postcss-preset-env', 'autoprefixer'],
				},
			},
		},
		'postcss-loader',
		{
			loader: 'sass-loader',
			options: {
				additionalData: `@use "sass:math";\n${breakpointVariables}`,
			},
		},
	],
});

module.exports = (_, args) => {
	const { mode } = args;
	const development = mode === 'development';

	const createThemeConfig = () => {
		return {
			mode,
			devtool: development ? 'source-map' : false,
			performance: {
				hints: development ? false : 'warning',
			},
			entry: {
				main: ['./index.js'],
			},
			output: {
				path: path.resolve(__dirname, 'build/assets'),
				publicPath: `/build/assets/`,
			},
			module: {
				rules: [createCssRule()],
			},
			plugins: createPlugins(),
			optimization: createOptimization(),
		};
	};

	return [wpConfig, createThemeConfig()];
};
