const merge = require('webpack-merge')
const common = require('./webpack.common');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const cssConfig= ExtractTextPlugin.extract({
	fallback: "style-loader",
	use: ['css-loader', 'sass-loader']
});


module.exports = merge(common, {
	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
				use: cssConfig
			}
		]
	},

	resolve: {
		modules: [
			'node_modules', 'bower_components'
		],
		extensions: ['.js', '.jsx', '.scss']
	},

	plugins: [
		new ExtractTextPlugin({
			filename: '[name].[contenthash].bundle.css',
			allChunks: true
		})
	]
})