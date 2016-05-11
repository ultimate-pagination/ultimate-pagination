module.exports = {
  entry: './src/ultimate-pagination.ts',
  output: {
    path: './dist',
    library: 'ultimatePagination',
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'ts-loader'
      }
    ],
    preLoaders: [
      { test: /\.js$/, loader: "source-map-loader" }
    ]
  }
};
