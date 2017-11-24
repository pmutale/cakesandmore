const path = require('path');
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
	context: __dirname,

	entry: {
		'webpackServer':'webpack-dev-server/client?http://cakesandmore.localhost:9090',
		'webpackHot': 'webpack/hot/only-dev-server',
		'main': '../themes/react/app',
		'styles': '../themes/static/styles.scss'
	},

	output: {
		path: path.resolve('../static/bundles/js/'),
		filename: '[name]-[hash].bundle.js',
		publicPath: '/static/bundles'
	},

	plugins: [
		// new DashboardPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new BundleTracker({filename: 'webpack-stats.json'}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new CleanWebpackPlugin(['../static/bundles/']),
		// new HtmlWebpackPlugin ({
		// title: 'Output Management'
		// })
		
	],

	externals: [

	],

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						query: {
							cacheDirectory: true
						}
					}
				],
			},

			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'eslint-loader',
						query: {
							cacheDirectory: true
						}
					}
				]
			},

			{
				test: /\.html$/,
				use: [{
					loader: 'html-loader'
				}]
			},
			
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [{
					loader: 'file-loader',
					query: '[name].[ext]'
				}]
			},
			// {
				// test: /\.scss$/,
				// use: [{
				// 	loader: 'style-loader',
				// },
				// {
				// 	loader: 'sass-loader'
				// },
				// {
				// 	loader: 'css-loader'
				// }
				// ]
			// }
		]
	},

};