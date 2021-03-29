const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {   
        main: "./src/index.js",
        vendor: "./src/vendor.js"    
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    })
    ],
    output: {
        assetModuleFilename: 'assets/[name][hash][ext]'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                type: 'asset/resource',
                use: 'svgo-loader'
            }
        ]
    },
    experiments: {
        asset: true
        
    }
};