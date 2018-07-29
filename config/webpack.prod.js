const merge = require('webpack-merge')
const common = require('./webpack.common')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
   mode: 'production',
   plugins: [
      new MiniCssExtractPlugin({
         filename: 'bundle.css'
      })
   ],
   module: {
      rules: [{
         test: /\.scss$/,
         use: [
            { loader: MiniCssExtractPlugin.loader },
            'css-loader', // translates CSS into CommonJS
            'sass-loader' // compiles Sass to CSS
         ]
      },
      {
         test: /\.css$/,
         use: [
            { loader: MiniCssExtractPlugin.loader },
            'css-loader' // translates CSS into CommonJS
         ]
      }]
   }
})