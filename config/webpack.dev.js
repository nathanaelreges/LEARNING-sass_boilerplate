const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
   mode: "development",
   devServer: {
      contentBase: './dist'
   },
   devServer: {
      open: true
   },
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