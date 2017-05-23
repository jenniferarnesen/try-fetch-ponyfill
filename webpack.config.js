const path = require('path');

module.exports = {
  entry: {
    app: ['./run.js']
  },
  output: {
    path: `${__dirname}/public/js/`,
    publicPath: '/js/',
    filename: 'bundle.js'
  },
};