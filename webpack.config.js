var path = require("path");
const TypescriptDeclarationPlugin = require('typescript-declaration-webpack-plugin');

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
    libraryTarget: "commonjs",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  externals: {
    react: "react",
  },
  plugins: [
    new TypescriptDeclarationPlugin({
      // Options for TypescriptDeclarationPlugin (see below)
    }),
  ],
};
