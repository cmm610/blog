module.exports = {
	entry: './src/app.js',
	output: {
		path: __dirname,
		filename: './bin/app.bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}
		]
	}
}