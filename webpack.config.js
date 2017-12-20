const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");

module.exports = {
	entry: {
		main: "./src/index.js",
		vendor: ["lodash"]
	},
	output: {
		filename: "[name].[chunkhash].js",
		path: path.resolve(__dirname, "dist")
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				// use: ["style-loader", "css-loader"]
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader"
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("[name].[chunkhash].css"),
		new ManifestPlugin(),
		new webpack.NamedChunksPlugin(),
		new webpack.NamedModulesPlugin(),
		// new webpack.HashedModuleIdsPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor"
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: "runtime"
		})
	]
};
