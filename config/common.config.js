const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const __base = path.resolve(__dirname, "..")

const config = {
  entry: path.resolve(__base, "src", "index.tsx"),
  output: {
    path: path.resolve(__base, "dist")
  },
  module: {
    rules: [
      {
        test: /\.?(ts|tsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader"
        }
      },
      {
        test: /\.?(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ]
          }
        }
      },
      {
        test: /\.?(css|scss)$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack + TypeScript + React",
      template: path.resolve(__base, "public", "index.html")
    })
  ]
}

module.exports = { common: config, __base }