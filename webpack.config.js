var path    = require('path');
var hwp     = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/dist')
    },
    module:{
        rules:[{
            exclude: /node_modules/,
            test: /\.js$/,
            loader: 'babel-loader'
        },
        {
            test: /\.mjs$/,
            include: /node_modules/,
            type: "javascript/auto",
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
       
          {
            test: /\.jsx?/,
            loader: 'babel-loader',
            exclude: /node_modules/
          }
        ]
    },
    plugins:[
        new hwp({template:path.join(__dirname, '/src/index.html')})
    ],
    node: {
        fs: "empty",
        net: 'empty',
        tls: 'empty',
        dns: 'empty'
     },
     resolve: {
        alias: {
          graphql:  path.resolve('./node_modules/graphql')
        },
        extensions: ['.js', '.jsx']
      }
}