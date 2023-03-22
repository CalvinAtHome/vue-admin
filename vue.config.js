
module.exports = {
  lintOnSave: true,
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      // 如发现 css.modules 报错，请查看这里：http://www.web-jshtml.cn/#/detailed?id=12
      scss: {
        data: `@import "./src/styles/main.scss";`,
      },
    },
    // 启用 CSS modules for all css / pre-processor files.
    requireModuleExtension: true,
  },

}
