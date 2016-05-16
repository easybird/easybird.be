var reactConfig = require("./config.json").react;
var path = require('path');
var APP_DIR = path.resolve(__dirname, reactConfig.appDir);
var BUILD_DIR = path.resolve(__dirname, reactConfig.buildDir);

var config = {
    devtool: 'source-map',
    entry: {
        blogOverview: APP_DIR + "/" + reactConfig.components.blogOverview.entry,
        blogArticle: APP_DIR + "/" + reactConfig.components.blogArticle.entry
    },
    output: {
        path: BUILD_DIR,
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                include: APP_DIR,
                test: /\.js$/,
                query: {
                    presets: ["es2015", "react"]
                }
            }
        ]
    },
    plugins:[
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor:{
                warnings: true
            }
        })
    ]
};

module.exports = config;
