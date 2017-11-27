
const path = require('path');
const config = require('./webpack.config');
const merge = require('webpack-merge');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const styles_path = path.resolve('../static/bundles/css/[name].[hash].css');

const extractSass = new ExtractTextPlugin(styles_path, {
	allChuncks: true
});



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
		extractSass,
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('development')
			}
		})
	]
} );