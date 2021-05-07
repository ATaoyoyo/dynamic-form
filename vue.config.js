module.exports = {
  lintOnSave: true,
  runtimeCompiler: true,

  chainWebpack: config => {
    // 修复HMR
    config.resolve.symlinks(true)
  },

  devServer: {
    open: true,
    port: 8090,
    hotOnly: true
  }
}
