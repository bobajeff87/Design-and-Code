module.exports = {
    entry: './src/App.js',
    output: {
        path: __dirname,
        filename: 'App.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
};