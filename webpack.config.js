const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
	filename: "[name].[contenthash].css",
	disable: process.env.NODE_ENV === "development"
});

module.exports = {
	entry: './src/app.js',
	output: {
		path: '/Users/mcilnayc/WebstormProjects/website/bin',
		filename: 'app.bundle.js'
	},
	module: {
		rules: [
			{ // regular css files
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: 'css-loader?importLoaders=1'
				})
			},
			{
				test: /\.(sass|scss)$/,
				use: extractSass.extract({
					use: [{
						loader: "css-loader"
					}, {
						loader: "sass-loader"
					}],
					fallback: 'style-loader'
				})
			}
		]
	},
	plugins: [
		extractSass
	]
}