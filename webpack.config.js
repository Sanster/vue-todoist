var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './client/main.js',
  output: {
    path: path.resolve(__dirname, './public'),
    publicPath: '/',
    filename: 'build.js'
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      // {
      //   test: /\.(png|jpg|gif|svg)$/,
      //   loader: 'file',
      //   query: {
      //     name: '[name].[ext]?[hash]'
      //   }
      // },
      {
        test: /\.scss$/,
        loader: 'style!css!sass',
        // loader: ExtractTextPlugin.extract("style","css!sass")
      },
      { 
        test: /\.(png|jpg|jpeg|gif)$/, 
        loader: 'url?limit=10000&name=[name].[ext]' 
      },
      { 
        test: /\.woff$/, 
        loader: 'url?limit=10000&name=[name].[ext]' 
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map',
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ])
}
