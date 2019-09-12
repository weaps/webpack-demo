module.exports = {
  plugins: [
    require('autoprefixer')({
      // overrideBrowserslist: ['> 0.15% in CN']
      "overrideBrowserslist": [
        "> 1%",
        "last 2 versions",
        "ie >= 8",
        "ios >= 8",
        "android >= 4.0"
      ],
      // overrideBrowserslist: [
      //   "Android 4.1",
      //   "iOS 7.1",
      //   "Chrome > 31",
      //   "ff > 31",
      //   "ie >= 8"
      // ]
  }), // css自动补全(最新配置方法)
    //require('cssnano') // 压缩css
  ]
}
