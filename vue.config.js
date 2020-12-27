module.exports = {
  outputDir: "docs/",
  runtimeCompiler: true,
  pages: {
    index: {
      entry: "src/main.js",
      title: "eetann's portfolio"
    }
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(yml|yaml)$/,
          use: [
            {
              loader: require.resolve('json-loader')
            },
            {
              loader: require.resolve('yaml-loader')
            }
          ]
        }
      ]
    }
  }
}
