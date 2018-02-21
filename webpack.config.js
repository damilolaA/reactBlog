const path = require('path');

module.exports = {

	context: __dirname,
	devtool: 'cheap-eval-source-map',
	entry: "./js/App.jsx",

	output: {
		path: path.join(__dirname, 'public'),
		filename: "bundle.js"
	},

	devServer: {
		publicPath: '/public/',
		historyApiFallback: true
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