const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: [
        "./site/index.tsx"
    ],
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },

    devtool: "source-map",

    resolve: {
        modules: ["node_modules"],
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".css"]
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                use: [
                    "babel-loader", 
					"ts-loader"
                ],
            },
            {
                test: /\.(css)$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localIdentName: "[name]__[local]___[hash:base64:5]",
                            importLoaders: true
                        }
                    },
                    "postcss-loader"
                ]
            }
        ]
    }
};
