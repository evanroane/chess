module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: "./dist/js/",
        filename: "index.js"
    },
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ],
    },
    debug: true,
    devtool: 'sourcemap',
};