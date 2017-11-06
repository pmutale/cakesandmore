const config = require('./webpack.config');
const merge = require('webpack-merge');
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge(config, {
	// devtool: 'source-map',
        
	devServer: {
		hot: true,
		inline: true,
		port: 9090,
		host:"cakesandmore.localhost",
		proxy: {
			'**': 'http://localhost:9000'
		}
	},
    
	plugins: [
		new CleanWebpackPlugin(['./static/bundles/']),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('development')
			}
		})
	]
} )