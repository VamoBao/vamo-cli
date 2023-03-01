const CracoLessPlugin = require('craco-less')
const { CracoAliasPlugin } = require('react-app-alias')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const WebpackBar = require('webpackbar')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true
          }
        }
      }
    },
    {
      // 配置路径别名插件
      plugin: CracoAliasPlugin,
      options: {}
    }
  ],
  webpack: {
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerPort: 8888,
        openAnalyzer: false
      }),
      new WebpackBar()
    ],
    configure: (webpackConfig) => {
      webpackConfig.optimization.splitChunks = {
        ...webpackConfig.optimization.splitChunks,
        cacheGroups: {
          commons: {
            chunks: 'all',
            // 将两个以上的chunk所共享的模块打包至commons组。
            minChunks: 2,
            name: 'commons',
            priority: 80
          }
        }
      }
      return webpackConfig
    }
  }
}
