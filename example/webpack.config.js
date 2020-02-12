const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./example/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: path.resolve(__dirname, "..", "lib/index.js"),
            options: {
              testA: "123",
              testB: "2323"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Custom template",
      template: "example/index.html"
    })
  ]
};
