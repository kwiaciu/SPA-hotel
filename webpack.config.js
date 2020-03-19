const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const htmlPlugin = new HTMLWebpackPlugin({template: './src/index.html'});
const copyPlugin = new CopyWebpackPlugin([{from: './src/assets'}]);

module.exports = {
    entry: './src/it-spa.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].bundle.js',
        // publicPath: '/'

    },
    plugins: [htmlPlugin, copyPlugin],
    // plugins: [htmlPlugin],
    devServer: {
        port: 8888,
        historyApiFallback: true,

    },

    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              'style-loader',
              // Translates CSS into CommonJS
              'css-loader',
              // Compiles Sass to CSS
              'sass-loader',
            ],
          },
        ],
      },
};