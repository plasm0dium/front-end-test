module.exports = {
  entry: "./public/app.js",
  output: {
    path: "./public",
    filename: "bundle.js"   
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  }
};