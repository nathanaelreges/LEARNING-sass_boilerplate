const merge = require('webpack-merge')
const common = require('./webpack.common')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require("webpack")

module.exports = merge(common, {
   mode: 'production',
   plugins: [
      new MiniCssExtractPlugin({
         filename: 'bundle.css'
      }),
      new webpack.DefinePlugin({
         "process.env.NODE_ENV": JSON.stringify("production")
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