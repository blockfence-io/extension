const webpack = require('webpack');
const path = require('path');

const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const DotenvPlugin = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const env = require('./utils/env');

var options = {
    mode: process.env.NODE_ENV || 'development',

    entry: {
        popup: path.join(__dirname, 'src', 'pages', 'Popup', 'index.tsx'),
        walletpopup: path.join(__dirname, 'src', 'pages', 'WalletPopup', 'index.tsx'),
        background: path.join(__dirname, 'src', 'scripts', 'background', 'index.ts'),
        content: path.join(__dirname, 'src', 'scripts', 'content', 'index.ts'),
        attach: path.join(__dirname, 'src', 'scripts', 'content', 'attach.ts'),
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

            // SVG Images
            {
                test: /\.svg$/i,
                type: 'asset',
                resourceQuery: /url/, // *.svg?url
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
                use: ['@svgr/webpack'],
            },

            // TypeScript
            { test: /\.(ts|tsx)$/, exclude: [/node_modules/, /\.stories\.tsx$/], loader: 'ts-loader' },

            // React JSX
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/, /\.stories\.jsx$/],
                use: [
                    {
                        loader: 'source-map-loader',
                    },
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
        ],
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.svg'],
    },

    plugins: [
        // Clean build/* folder prior to building
        new CleanWebpackPlugin({ verbose: false }),

        new ESLintPlugin(),

        new DotenvPlugin(),

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
            template: path.join(__dirname, 'src', 'pages', 'WalletPopup', 'index.html'),
            filename: 'walletpopup.html',
            chunks: ['walletpopup'],
            cache: false,
        }),

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
