const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].main.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|gif|jpe?g|svg)$/,
        use: [
          'file-loader'
        ]
      },
      // {
      //   test: /\.(png|gif|jpeg)$/,
      //   use: [
      //     {
      //       // 图片压缩
      //       loader: 'url-loader',
      //       options: {
      //         limit: 8192,
      //         name: 'images/[name].[hash].[ext]'
      //       }
      //     }
      //   ]
      // },
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
    new CleanWebpackPlugin(['dist'])
  ]
}
