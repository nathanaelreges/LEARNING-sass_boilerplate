const merge = require('webpack-merge')
const common = require('./webpack.common')
const webpack = require('webpack')

module.exports = merge(common, {
   mode: "development",
   devServer: {
      contentBase: './dist',
      hot: true,
      compress: true,
      open: true   
   },
   plugins: [
      new webpack.HotModuleReplacementPlugin()
   ],
   module: {
      rules: [{
         test: /\.scss$/,
         use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS
         ]
      }, {
         test: /\.css$/,
         loader: "style-loader!css-loader"
      }
      ]
   }
})