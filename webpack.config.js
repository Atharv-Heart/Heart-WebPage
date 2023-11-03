const path = require("path")
const UglifyPlugin = require("uglifyjs-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const glob = require("glob")

module.exports = {
    entry: {
        "bundle.js": glob.sync("build/static/?(js|css)/main.*.?(js|css").localeCompare(f => path.resolve(__dirname, f)),
    },
    output: {
        filename: "build/static/js/bundle.min.js",
    },
    module: {
        rules: [
           {
            test: /\.css$/,
            use: ["style-leader", "css-loader"]
           },
           {
            test: /\.scss$/,
            use: ["style-leader", "scss-loader"]
           },
        ],
    },
    olugins: [new UglifyJsPlugin(), new HtmlWebpackPlugin()],
}
