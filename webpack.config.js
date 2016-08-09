var webpack = require('webpack');
require('dotenv').config();

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var firebaseApi = process.env.FIREBASE_API;
var firebaseAuth = process.env.FIREBASE_AUTH;
var firebaseUrl = process.env.FIREBASE_DB_URL;
var firebaseBucket = process.env.FIREBASE_BUCKET;
var githubToken = '';

if (process.env.NODE_ENV === 'test') {
    firebaseApi = process.env.FIREBASE_API_TEST;
    firebaseAuth = process.env.FIREBASE_AUTH_TEST;
    firebaseUrl = process.env.FIREBASE_DB_URL_TEST;
    firebaseBucket = process.env.FIREBASE_BUCKET_TEST;
    githubToken = process.env.GITHUB_TEST_TOKEN;
}

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './app/app.js'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                FIREBASE_API: JSON.stringify(firebaseApi),
                FIREBASE_AUTH: JSON.stringify(firebaseAuth),
                FIREBASE_DB_URL: JSON.stringify(firebaseUrl),
                FIREBASE_BUCKET: JSON.stringify(firebaseBucket),
                GITHUB_TEST_TOKEN: JSON.stringify(githubToken)
            }
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/
            },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.scss$/, loader: "style-loader!css-loader!sass-loader" }
        ]
    },
    devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'
};