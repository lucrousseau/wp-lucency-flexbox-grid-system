import path from "path";
import { fileURLToPath } from "url";

import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import WebpackNotifierPlugin from "webpack-notifier";
import WebpackAssetsManifest from "webpack-assets-manifest";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

import wpConfig from "@wordpress/scripts/config/webpack.config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

export default (_, args) => {
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
