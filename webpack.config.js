module.exports = {
  entry: "./js/App.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [ __dirname + '/js', ],
        loader: "babel"
      },
    ]
  }
};
