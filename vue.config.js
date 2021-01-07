module.exports = {
  publicPath: './',
  outputDir: "docs/",
  runtimeCompiler: true,
  pages: {
    index: {
      entry: "src/main.js",
      title: "eetann's portfolio"
    }
  },
  chainWebpack: config => {
    config.module
      .rule('yaml')
      .test(/\.ya?ml?$/)
      .use('json-loader')
      .loader('json-loader')
      .end()
      .use('yaml-loader')
      .loader('yaml-loader')
      .end()
  },
}
