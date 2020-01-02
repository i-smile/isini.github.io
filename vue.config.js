module.exports = {
  outputDir: 'docs',

  // publicPath: process.env.NODE_ENV === 'production' ? '/vant-demo/' : '/',
  css: {
    loaderOptions: {
      less: {
        modifyVars: {}
      }
    }
  },

  publicPath: '',

  devServer: {
    // 如果需要模拟数据，就放开下面这一行（同时要在mock-server目录中打开模拟服务器）
    // proxy: 'http://localhost:3000'
  }
}
