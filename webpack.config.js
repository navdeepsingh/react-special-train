const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
      app: './src/index.js'
    },
    devtool: 'inline-source-map',
   devServer: {
     contentBase: './dist',
   },
   plugins: [
      new HtmlWebpackPlugin({
        title: 'Development',
        template: "./index.html",
        filename: "./index.html"
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ],
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    }
};
