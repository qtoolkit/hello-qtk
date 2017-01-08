var webpack = require('webpack');
var libraryName = 'app';

module.exports = {  
  cache: true,
  entry: {
    index : './js/index.js'
  },
  output: {
    path: '',
    filename: 'www/[name].js',
    library: libraryName
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js']
  }
}
