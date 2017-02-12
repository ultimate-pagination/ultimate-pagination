module.exports = {
  entry: './src/ultimate-pagination.ts',
  output: {
    path: './dist',
    library: 'ultimatePagination',
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'source-map-loader'
      },
      {
        test: /\.tsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'ts-loader'
      }
    ]
  }
};
