const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {
    mode: 'production',
    entry: './src/client/index.js',
    optimization: {
      minimizer: [ new TerserPlugin({}), new OptimizeCSSAssetsPlugin({}) ]
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader', 'eslint-loader'],
        },
        {
          test: /\.scss$/,
          use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
        }
      ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/client/views/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
          filename: '[name].css'
        })
    ]
  };
