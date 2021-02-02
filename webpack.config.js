const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: "./client/src/index.js",
  devtool: 'inline-source-map',
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "client/dist/"),
    publicPath: "/client/public/dist/",
    filename: "[name].bundle.js"
  },
  // devServer: {
  //   contentBase: path.join(__dirname, "/client/public/"),
  //   port: 3000,
  //   publicPath: "http://localhost:3000/client/dist/",
  //   hotOnly: true
  // },
  // plugins: [new webpack.HotModuleReplacementPlugin()],
  externals: {
    'react/addons': true,
    'react/lib/ReactContext': true,
    'react/lib/ExecutionEnvironment': true
  }
}