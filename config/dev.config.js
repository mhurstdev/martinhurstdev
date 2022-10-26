const path = require("path")
const { common, __base } = require("./common.config")
const { merge } = require("webpack-merge")

module.exports = merge(common, {
  mode: "development",
  devServer: {
    static: {
      directory: path.resolve(__base, "public")
    },
    port: 3005
  }
})