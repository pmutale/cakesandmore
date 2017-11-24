const merge = require('webpack-merge');
const common = require('./webpack.common');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

const styles_path = '../static/bundles/css/[name].[hash].css';
const extractSass = new ExtractTextPlugin(styles_path, {
	allChuncks: true,
});

const cssConfig = extractSass.extract({
	use: [
		{
			loader: 'css-loader', 
			options: {sourceMap: true }
		}, 
		{ 
			loader: 'sass-loader', 
			options: {sourceMap: true}
		}],
	fallback: "style-loader"
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
		new DashboardPlugin({ port: 9000 }),
		new ExtractTextPlugin({
			filename: '[name].[contenthash].bundle.css',
			allChunks: true
		})
	]
})