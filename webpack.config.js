const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const path = require("path"); // this is a Node.js path module that is
const Dotenv = require("dotenv-webpack");

const webpack = require("webpack"); // import webpack

const config = {
  // config object for webpack to read

  // target: "node",

  entry: "./src/index.js", // where webpack looks first to start bundling

  output: {
    //where bundled code is going to be placed after bundling
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  // resolve extensions
  resolve: {
    extensions: [".mjs", ".js", ".jsx", ".css", ".scss"],
    // fallback: {
    //   stream: require.resolve("stream-browserify"),
    //   crypto: require.resolve("crypto-browserify"),
    //   http: require.resolve("stream-http"),
    //   path: require.resolve("path-browserify"),
    // },
  },

  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.js|jsx$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [new Dotenv(), new NodePolyfillPlugin() ],
};

module.exports = config;
