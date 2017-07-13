var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/main.js',
    context: __dirname,
    node: {
        __filename: true,
        __dirname: true
     },
    target: 'node',
    output: {
      path: path.resolve(__dirname, 'assets'),
      filename: './bundle.js',
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'react-hot-loader',
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        colors: true
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
            new webpack.DefinePlugin({
                        'process.env.NODE_ENV': JSON.stringify('development')
                    })
        ],
    devServer: {
          historyApiFallback: true
    }

};
