import path from 'path';
import webpack from 'webpack';

const PRODUCTION = process.env.NODE_ENV === 'production';

const vendor = [
  'react',
  'react-dom',
  'react-router-dom',
  'redux',
  'react-redux',
  'dexie',
  'emotion',
  'remarkable',
  'unfetch',
];

const main = './src/index.js';


const plugins = PRODUCTION
  ? [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: 3,
    }),
  ]
  : [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: 3,
    }),
  ]
  ;

export default {
  entry: { vendor, main },

  devtool: PRODUCTION ? false : 'source-map',

  output: {
    path: path.resolve(__dirname, 'assets', 'js'),
    publicPath: '/assets/js',
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
      },
    ],
  },

  plugins,
};
