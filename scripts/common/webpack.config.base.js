const nodeExternals = require('webpack-node-externals');

const { resolve } = require('./utils');

module.exports = {
  externals: [nodeExternals()],
  devtool: 'source-map',
  stats: 'errors-only',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    alias: {
      '@common': resolve('/src/common'),
      '@db': resolve('/src/db'),
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
