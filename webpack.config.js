const path = require('path');

module.exports = {

	context: __dirname,

	entry: "./js/app.jsx",

	output: {
		path: path.join(__dirname, 'public'),
		filename: "bundle.js"
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