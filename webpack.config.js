const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: [
          { loader: 'style-loader'},
          { loader: 'css-loader'},
          // { loader: 'postcss-loader'},
          { loader: 'sass-loader'}
        ]
      },
      {
        test: /\.(png|gif|jpe?g|svg)$/,
        use: [
          'file-loader'
        ]
      },
      // 加载字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
      
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CleanWebpackPlugin()
  ]
}
