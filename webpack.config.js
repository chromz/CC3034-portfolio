const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');


module.exports = [
  {
    entry: [
      'webpack-hot-middleware/client',
      './src/client/index.jsx',
    ],
    mode: 'development',
    resolve: {
      extensions: [
        '.js',
        '.jsx',
      ],
    },
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist/static'),
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.(png|jpg|gif)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'assets/',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
  },
  {
    entry: [
      './src/server.jsx',
    ],
    mode: 'development',
    resolve: {
      extensions: [
        '.js',
        '.jsx',
      ],
    },
    output: {
      filename: 'server.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    target: 'node',
    externals: nodeExternals(),
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.(png|jpg|gif)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'assets/',
              },
            },
          ],
        },
      ],
    },
  },
];
