const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');

function resolve(dir) {
  return path.join(__dirname, './', dir)
}

module.exports = {
  mode: 'development', 
  entry: {
    app: './src/index.js', 
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'app.js',
    publicPath: '/' // 此选项指定在浏览器中引用时输出目录的公共URL
  },
  resolve: {
    extensions: ['.js', '.vue', 'jsx'],
    alias: {
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {   
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        exclude: /node_modules/,
        options: {
          limit: 1000,
          name: 'img/[name].[hash:7].[ext]'
        }
      }
    ]
 },
  devServer: {
    contentBase: resolve('dist'), // 根目录
    hot: true, // 是否开启热替换，无须手动刷新浏览器
    port: 8081, // 端口
    host: '0.0.0.0', // host
    open: true, // 是否自动打开浏览器
    noInfo: true // 不提示打包信息，错误和警告仍然会显示
  },
  plugins: [
    // 加在最前面
    new VueLoaderPlugin(),
    new webpack.ProvidePlugin({
      PIXI: 'pixi.js',
      Vue: ['vue/dist/vue.esm.js','default']
    }),
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html'
    })
  ]
}