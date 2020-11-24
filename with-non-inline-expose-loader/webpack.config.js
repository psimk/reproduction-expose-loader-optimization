const path = require("path");

module.exports = {
  entry: "./main.js",
  mode: "production",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
  },
  optimization: {
    // just to more easily inspect the output bundle
    minimize: false,
    sideEffects: false,
  },
  module: {
    rules: [
      {
        test: require.resolve("styled-components"),
        loader: "expose-loader",
        options: {
          exposes: "styled",
        },
      },
    ],
  },
};
