const path = require("path");
const wpConfig = require("@wordpress/scripts/config/webpack.config");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const WebpackNotifierPlugin = require("webpack-notifier");
const WebpackAssetsManifest = require("webpack-assets-manifest");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const createPlugins = () => [
	new CleanWebpackPlugin(),
	new MiniCssExtractPlugin({
		filename: "[name]-[contenthash].css",
		chunkFilename: "[name]-[chunkhash].css",
	}),
	new WebpackAssetsManifest(),
	new WebpackNotifierPlugin(),
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
		"css-loader",
		{
			loader: "postcss-loader",
			options: {
				postcssOptions: {
					plugins: [["postcss-preset-env"]],
				},
			},
		},
		"postcss-loader",
		{
			loader: "sass-loader",
			options: {
				additionalData: `@use "sass:math";`,
			},
		},
	],
});

module.exports = (_, args) => {
	const { mode } = args;
	const development = mode === "development";

	const createThemeConfig = () => {
		return {
			mode: mode,
			devtool: development ? "source-map" : false,
			performance: {
				hints: development ? false : "warning",
			},
			entry: {
				main: ["./index.js"],
			},
			output: {
				path: path.resolve(__dirname, "build"),
				publicPath: `/build/`,
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
