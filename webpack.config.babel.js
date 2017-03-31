import path from 'path';
import webpack from 'webpack';

export default {

  entry: {
    vendor: [ 'react', 'react-dom', 'react-router-dom', 'dexie', 'styled-components', 'snarkdown' ],
    main: './src/index.js',
  },

  devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, 'assets', 'js'),
    publicPath: '/assets/js',
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: [ 'babel-loader' ],
      },
    ],
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: 3,
    }),
  ],

};
