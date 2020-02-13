const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./example/index.md",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  resolveLoader: {
    modules: ["node_modules", path.resolve(__dirname, "lib")]
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: path.resolve("lib/index.js"),
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
