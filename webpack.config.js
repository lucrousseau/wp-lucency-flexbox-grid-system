const fs = require('fs');
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
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
	new RemoveEmptyScriptsPlugin(),
	new NodePolyfillPlugin({
		excludeAliases: ['console'],
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
		new TerserPlugin(),
		new CssMinimizerPlugin({
			minify: CssMinimizerPlugin.cssnanoMinify,
		}),
	],
});

const createJsRule = ({ babelPlugins }) => ({
	test: /\.js$/,
	exclude: /node_modules/,
	use: {
		loader: 'babel-loader',
		options: {
			presets: [
				[
					'@babel/preset-env',
					{
						useBuiltIns: 'entry',
						corejs: 3.22,
						debug: false,
					},
				],
			],
			plugins: babelPlugins,
		},
	},
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
		const babelPlugins = [
			'@babel/plugin-transform-runtime',
			'@babel/plugin-syntax-dynamic-import',
			'@babel/plugin-proposal-class-properties',
			!development && [
				'transform-remove-console',
				{ exclude: ['error', 'warn', 'info'] },
			],
		].filter(Boolean);

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
				rules: [createJsRule({ babelPlugins }), createCssRule()],
			},
			plugins: createPlugins(),
			optimization: createOptimization(),
		};
	};

	return [wpConfig, createThemeConfig()];
};
