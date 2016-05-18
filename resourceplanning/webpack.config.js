'use strict';
/**
 * Usage
 * npm run dev
 * Browser gets opened at Port 3000
 *
 */



// Get the parameter after npm run [profile]
var profile = process.env.npm_lifecycle_event;
var isDevFast = profile === 'dev';
var isDevFull = profile === 'dev-full';
var isProd = profile === 'prod';

// Modules
var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
//var exttractCssOnBuild = true;// True to determine css files should be extracted into an own file

// Paths
var webappBaseDir = path.resolve(__dirname, 'src', 'main', 'resources','static');
var outputPath = path.join(__dirname, 'target', 'static', 'dist');
var imgOutputPath = path.join(outputPath, 'assets', 'images');

// Entry Point calcuation
var entryPoints;
if (isDevFast) {
    entryPoints = {
        app: path.resolve(webappBaseDir, 'webpack-entry-app-dev.js')
    };
} else if (isDevFull) {
    entryPoints = {
        vendors: path.resolve(webappBaseDir, 'webpack-entry-vendors.js'),
        app: path.resolve(webappBaseDir, 'webpack-entry-app-dev.js')
    };
} else if (isProd) {
    entryPoints = {
        vendors: path.resolve(webappBaseDir, 'webpack-entry-vendors.js'),
        app: path.resolve(webappBaseDir, 'webpack-entry-app-prod.js')
    };
}

// Plugin configuration
var plugins = [];

if (isProd) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }));
}

if (isDevFast || isDevFull) {
    plugins.push(new BrowserSyncPlugin({host: 'localhost', port: 3000, server: {baseDir: [outputPath]}}));
}

// find and eliminate duplicate dependencies
plugins.push(new webpack.optimize.DedupePlugin());

plugins.push(new CopyWebpackPlugin([
    // Copy index.html to output directory
    {from: 'index.html'},
    // Copy partials to parallel folder structure within output directory in order to enable lazy loading of partials
    {from: '**/*.tpl.html'},
    // Copy bundled-template-img to parallel folder structure in order to enable static loading of bundled-template-img
    {from: '**/*.gif'},
    {from: '**/*.jpg'},
    {from: '**/*.png'},

    {from: 'assets/**/*.gif'},
    {from: 'assets/**/*.jpg'},
    {from: 'assets/**/*.png'},
    {from: 'assets/**/*.svg'}
]));
/**
 * Remove all the files in output dir
 * Remark 1: Must be the last plugin as karma.config removes this plugin
 * Remark 2: Do not delete in fast mode as we would remove vendors.js
 */
if (!isDevFast) {
    plugins.push(new CleanWebpackPlugin([outputPath], {
        verbose: true,
        dry: false //true=Do not delete anything, good for testing.
    }));
}
// -----------------------------------------------------------------------------------------
// Module exports
// -----------------------------------------------------------------------------------------
module.exports = {
    // Entry points for webpack to scan and process files
    entry: entryPoints,
    // used for copy plugin as base dir for from parameters
    context: webappBaseDir,
    output: {
        filename: '[name].js', // path to where webpack will build your stuff
        path: outputPath
    },
    //publicPath: 'http://localhost:3000/',
    devtool: 'source-map',//create source maps when uglifying/minifying
    module: {
        loaders: [

            //Javascript loader
            {test: /\.js$/, loaders: ['ng-annotate'], exclude: [/[\\\/]node_modules/]},//annotates ng injections,

            //HTML loader
            {test: /\.html$/, loader: 'html-loader'},//raw

            // CSS, less, and others compiling to css
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {test: /\.styl$/, loader: 'css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/'},
            // Images
            {test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192&name=[path][name].[ext]'}, // inline base64 URLs for <=8k bundled-template-img, direct URLs for the rest

            // Fonts
            {test: /\.(svg)(\?.*$|$)/, loader: "url?name=[hash].[ext]limit=100000&mimetype=image/svg+xml"},
            {test: /\.(woff)(\?.*$|$)/, loader: "url?name=[hash].[ext]limit=100000&mimetype=application/font-woff"},
            {test: /\.(woff2)(\?.*$|$)/, loader: "url?name=[hash].[ext]&limit=100000&mimetype=application/font-woff2"},
            {test: /\.(ttf)(\?.*$|$)/, loader: "url?name=[hash].[ext]limit=100000&mimetype=application/octet-stream"},
            {test: /\.(eot)(\?.*$|$)/, loader: "file?name=[hash].[ext]?[param]"},
        ]
    },

    // Use node_modules for npm modules and the dir web_modules for other
    // libraries (not available in npm repo)
    resolve: {
        modulesDirectories: ['node_modules', 'web_modules'],
    },
    plugins: plugins
};

console.log('-------------------------------------------------------------------------------------------');
console.log('Running webpack configured as followingly:');
console.log('-------------------------------------------------------------------------------------------');
console.log('Profile                 : ' + profile);
console.log('__dirname               : ' + __dirname);
console.log('web app entry point     : ' + entryPoints);
console.log('context                 : ' + module.exports.context);
console.log('dist dir                : ' + module.exports.output.path);
console.log('imgOutputPath           : ' + imgOutputPath);
console.log('-------------------------------------------------------------------------------------------');
