const webpack = require('webpack');
const path = require('path');

const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const env = require('./utils/env');

var options = {
    mode: process.env.NODE_ENV || 'development',

    entry: {
        popup: path.join(__dirname, 'src', 'pages', 'Popup', 'index.tsx'),
        content: path.join(__dirname, 'src', 'pages', 'Content', 'index.ts'),
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },

    module: {
        rules: [
            {
                // CSS Files
                test: /\.(css)$/,
                // in the `src` directory
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },

            // HTML Files
            {
                test: /\.html$/,
                loader: 'html-loader',
                exclude: /node_modules/,
            },

            // TypeScript
            { test: /\.(ts|tsx)$/, loader: 'ts-loader', exclude: /node_modules/ },

            // React JSX
            {
                test: /\.(js|jsx)$/,
                use: [
                    {
                        loader: 'source-map-loader',
                    },
                    {
                        loader: 'babel-loader',
                    },
                ],
                exclude: /node_modules/,
            },
        ],
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    plugins: [
        // Clean build/* folder prior to building
        new CleanWebpackPlugin({ verbose: false }),

        new ESLintPlugin(),

        // Copy manifest.json file to build + update internal fields
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/manifest.json',
                    to: path.join(__dirname, 'build'),
                    force: true,
                    transform: function (content, path) {
                        return Buffer.from(
                            JSON.stringify({
                                description: process.env.npm_package_description,
                                version: process.env.npm_package_version,
                                ...JSON.parse(content.toString()),
                            })
                        );
                    },
                },
            ],
        }),

        // Copy assets
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/assets',
                    to: path.join(__dirname, 'build/assets'),
                    force: true,
                },
            ],
        }),

        // Copy HTML file
        new HtmlPlugin({
            template: path.join(__dirname, 'src', 'pages', 'Popup', 'index.html'),
            filename: 'popup.html',
            chunks: ['popup'],
            cache: false,
        }),
    ],
};

// Remove 'eval' and minify on production
if (env.NODE_ENV === 'development') {
    options.devtool = 'cheap-module-source-map';
} else {
    options.optimization = {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
            }),
        ],
    };
}

module.exports = options;
