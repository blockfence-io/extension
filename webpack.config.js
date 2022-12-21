var webpack = require("webpack");
var path = require("path");
var HtmlPlugin = require("html-webpack-plugin");
var CopyPlugin = require("copy-webpack-plugin");
var TerserPlugin = require("terser-webpack-plugin");

var env = require("./utils/env");
const ASSET_PATH = process.env.ASSET_PATH || "/";

var fileExtensions = [
  "jpg",
  "jpeg",
  "png",
  "gif",
  "eot",
  "otf",
  "svg",
  "ttf",
  "woff",
  "woff2",
];

var options = {
  mode: process.env.NODE_ENV || "development",

  entry: {
    popup: path.join(__dirname, "src", "pages", "Popup", "index.tsx"),
  },

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build"),
    clean: true,
    publicPath: ASSET_PATH,
  },

  module: {
    rules: [
      {
        // look for .css or .scss files
        test: /\.(css|scss)$/,
        // in the `src` directory
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.html$/,
        loader: "html-loader",
        exclude: /node_modules/,
      },
      { test: /\.(ts|tsx)$/, loader: "ts-loader", exclude: /node_modules/ },
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: "source-map-loader",
          },
          {
            loader: 'babel-loader',
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    // alias: alias,
    extensions: fileExtensions
      .map((extension) => "." + extension)
      .concat([".js", ".jsx", ".ts", ".tsx", ".css"]),
  },
  plugins: [
    // Copy manifest.json file to build + update internal fields
    new CopyPlugin({
      patterns: [
        {
          from: "src/manifest.json",
          to: path.join(__dirname, "build"),
          force: true,
          transform: function (content, path) {
            return Buffer.from(
              JSON.stringify({
                description: process.env.npm_package_description,
                version: process.env.npm_package_version,
                ...JSON.parse(content.toString()),
              })
            );
          },
        },
      ],
    }),
    // Copy assets
    new CopyPlugin({
      patterns: [
        {
          from: "src/assets",
          to: path.join(__dirname, "build/assets"),
          force: true,
        },
      ],
    }),
    // Copy HTML file
    new HtmlPlugin({
      template: path.join(__dirname, "src", "pages", "Popup", "index.html"),
      filename: "popup.html",
      chunks: ["popup"],
      cache: false,
    }),
  ],
};

// Remove 'eval' and minify on production
if (env.NODE_ENV === "development") {
  options.devtool = "cheap-module-source-map";
} else {
  options.optimization = {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  };
}

module.exports = options;
