const path = require('path');

module.exports = {

	context: __dirname,

	entry: "./js/App.jsx",

	output: {
		path: path.join(__dirname, 'public'),
		filename: "bundle.js"
	},

	resolve: {
		extensions: [".js", ".jsx", ".json"]
	},

	stats: {
		colors: true,
		reasons: true,
		chunks: true
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader'
			}
		]
	}
}