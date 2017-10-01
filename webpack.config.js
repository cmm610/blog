module.exports = {
	entry: './src/app.js',
	output: {
		path: '/Users/mcilnayc/WebstormProjects/website/bin',
		filename: 'app.bundle.js'
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}
		]
	}
}