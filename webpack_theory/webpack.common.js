const path = require('path')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
    devServer:{
        contentBase:'./dist',
        port:3030,
        hot:true
    },
    entry:{
        myEntry:'./src/index.js',
    },
    output:{
        filename:'[name].bundle.js',
        chunkFilename:'[name].shared.js',
        path:path.resolve(__dirname,'dist'),
        //publicPath:'/test'
        // publicPath will be used by htmlWebpackPlugin
        // and webpack-dev-server as well...
        //'/proj/dist/'//less smart here...
    },
    module:{
        rules:[
            {
                test:/\.(png|jpg|jpeg|svg|gif)$/,
                loader:'file-loader',
                options:{
                    name:'myPrefix.[name].[ext]',
                    outputPath:'images/',
                    publicPath:'/proj/dist/images' // for webpack-dev-server
                    //publicPath:'/proj/dist/images' 
                    // overrides output publicPath, needs outputPath
                }
            }
        ]
    },
    plugins:[
        new cleanWebpackPlugin(['dist']),
        new htmlWebpackPlugin({
            title:'html webpack plugin',
            filename:"myIndex.html",
            //template:'./index.html'
        }),
        new webpack.ProvidePlugin({
            $:'jquery'
        })
    ]
}