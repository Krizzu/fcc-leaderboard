const webpack = require('webpack'); 

const path = require('path');

module.exports = {
  context:  path.resolve(__dirname, './src'),
  entry: {
    app: './index.js',
  },

  output: {
    path: path.resolve(__dirname, './'),
    filename: '[name].bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /(node_modules)/,

      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /(node_modules)/,
      }

    ]
  },  

};
