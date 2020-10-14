const path = require('path')
// npm i purgecss-webpack-plugin glob -D 删除无用的css样式插件
// const glob = require('glob')
// glob.sync('./src/**/*') //src下任意文件
// image-webpack-loader 压缩图片loader
// webpack-bundle-analyzer.
module.exports = (env) => {
  console.log(env, 'xx')
  return {
    mode: env,
    entry: './src/index.js',
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, 'dist')
    },
    // externals: {
    //   'jquery': '$'
    // },
    module: {
      rules: [
        {
          test: /\.(css|sass|scss)$/,
          use: [
            {
              loader: "style-loader"
            },
              {
              loader: "css-loader"
            },
            {
              loader: "postcss-loader"
            },
            {
              loader: "sass-loader"
            }
          ]
        },
        {
          test: /\.(png|gif|jpeg|jpg|svg)$/,
          use: [
            {
              loader: "file-loader"
            }
          ]
        },{
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
    }
  }
}
