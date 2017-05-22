const path = require('path');

module.exports = {
  entry: {
    app: ['./run.js']
  },
  output: {
    path: path.resolve(__dirname, './'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, './'),
    port: 9000
  }
};