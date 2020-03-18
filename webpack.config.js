const HTMLWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

const htmlPlugin = new HTMLWebpackPlugin({template: './src/index.html'});

module.exports = {
    entry: './src/it-spa.js',
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
        publicPath: '/',

    },
    // plugins: [htmlPlugin, copyPlugin],
    plugins: [htmlPlugin],
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