const merge = require('webpack-merge');
const common = require('./webpack.common');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const styles_path = 'css/[name].[hash].css';
const extractSass = new ExtractTextPlugin(styles_path, {
	allChuncks: true
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
		new CleanWebpackPlugin(path.join(__dirname, '../static/bundles/'), {
			root: __dirname
		}),
		new DashboardPlugin({ port: 9000 }),
		extractSass
	]
});