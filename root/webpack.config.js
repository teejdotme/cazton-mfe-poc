const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => ({
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    filename: "index.js",
    libraryTarget: "system",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "sourcemap",
  module: {
    rules: [
      { parser: { system: false } },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    disableHostCheck: true,
    contentBase: 'src/assets',
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: "src/index.html",
      templateParameters: {
        isLocal: env && env.isLocal === "true",
      },
    })/*,
    new CleanWebpackPlugin(),*/
  ],
  externals: ["single-spa", /^@poc-mfe\/.+$/],
});