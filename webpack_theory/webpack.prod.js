const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = merge(common,{
    mode:'production',
    devtool:'source-map', 
    // source-map for production mode
    module:{
        rules:[
            {
                test:/\.css$/,
                loader:[
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    optimization:{
        splitChunks:{
            chunks:'all'
        },
        minimizer:[
            // uglifyJS here
            new UglifyJsPlugin(),
            new OptimizeCssAssetsPlugin()
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:"css/mycss.[name].css"
        })
    ]
})