import webpack from 'webpack';

const isProd = process.env.NODE_ENV && process.env.NODE_ENV === 'production';

export default {
  entry: "./js/index.js",
  output: {
    path: __dirname,
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [ __dirname + '/js', ],
        loader: "babel"
      },
    ]
  },
  plugins: isProd ? ([
    new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': JSON.stringify('production') } }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ]) : [],
  /*
  resolve: {
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },
  */
};
