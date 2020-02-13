import path from "path";
import webpack from "webpack";
import memoryfs from "memory-fs";

export default function(fixture, options = {}) {
  const compiler = webpack({
    context: __dirname,
    entry: `./${fixture}`,
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
    }
  });

  compiler.outputFileSystem = new memoryfs();

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) reject(err);

      resolve(stats);
    });
  });
}
