const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].main.[hash].js",
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],  // 用于解析es6语法
            plugins: ['@babel/plugin-proposal-class-properties'] // 用于解析es7语法
          }
        },
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          // {
          //   loader: 'style-loader',
          //   options: {
          //     insert: 'top'
          //   }
          // },
          {
            loader: MiniCssExtractPlugin.loader // 如果使用了'mini-css-extract-plugin'插件，就不需要引入style-loader
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader',
            // options: {
            //   plugins: [
            //     require('autoprefixer')({
            //       browsers: ['last 2 versions']
            //     })
            //   ]
            // }
          },{
            loader: 'sass-loader',
          }
        ]
      },
      {
        test: /\.(png|gif|jpe?g|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            /*
              * [ext] 表示原图是什么格式就打包成什么格式
              * images 表示解析后的图片目录
            */
            name: '/images/[name].[hash].[ext]',
            limit: 100000
          }
        }]
      },
      // 加载字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'font'
          }
        }]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: true,
      minify: {},
      hash: true
    }),
    // 将CSS提取为独立的文件的插件，对每个包含css的js文件都会创建一个CSS文件，支持按需加载css和sourceMap
    new MiniCssExtractPlugin({
      filename: 'main.css' // 设置CSS提取为独立的文件名称
    }),
    new webpack.ProvidePlugin({
      $: 'jquery'
    })
  ]
}
