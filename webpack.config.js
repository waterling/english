module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: `${__dirname}/public/dist`
    },

    devtool: 'source-map',

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },

    module: {
        rules: [
            {
                test: /\.tsx$/,
                enforce: 'pre',
                use: [
                    {
                        loader: 'tslint-loader',
                        options: { emitErrors: true }
                    }
                ]
            },
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    { loader: 'sass-loader' }
                ]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }]
            }
        ]
    },

    externals: {
        react: 'React',
        'react-dom': 'ReactDOM'
    }
};
