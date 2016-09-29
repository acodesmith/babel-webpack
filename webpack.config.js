var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');


var config = {
  entry: APP_DIR + '/App.js',
  output: {
    path: BUILD_DIR,
    filename: 'app.bundle.js'
  },
  module : {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        include : APP_DIR,
        loader : 'babel',
        query: {
          plugins: ['transform-runtime'],
          presets: ['stage-2', 'es2015'],
        }
      }
    ]
  }
};

module.exports = config;