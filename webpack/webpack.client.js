const path = require('path');
const Webpack = require('webpack');
const ExtractText = require('extract-text-webpack-plugin');
const Assets = require('assets-webpack-plugin');

const production = process.env.NODE_ENV === 'production';

const plugins = [
  new Webpack.LoaderOptionsPlugin({ minimize: production }),
  new Webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(production
      ? 'production'
      : 'dev')
  }),
  new Webpack
    .optimize
    .CommonsChunkPlugin({ name: 'vendor', minChunks: Infinity }),
  new ExtractText({ filename: '[name][hash].css', allChunks: true }),
  new Assets({
    path: path.resolve(__dirname, '../build'),
    filename: 'assets.json',
    prettyPrint: !production
  })
];

const babelOptions = {
  presets: ['es2015', 'stage-3', 'react'],
  plugins: [
    'transform-es2015-modules-commonjs'
  ]
};

if (production) {
  plugins.push(new Webpack.optimize.UglifyJsPlugin({
    comments: false,
    negate_iife: false,
    comparisons: true,
    conditionals: true,
    dead_code: true,
    evaluate: true,
    if_return: true,
    join_vars: true,
    pure_getters: true,
    unsafe: true,
    unsafe_comps: true,
    unused: true
  }));

  plugins.push(new Webpack.DefinePlugin({
    'process.env.BROWSER': true,
    'process.env.NODE_ENV': JSON.stringify('production')
  }))

  babelOptions
    .plugins
    .push('babili');
}

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, '../src/client/index.tsx'),
    vendor: ['react', 'normalize.css']
  },
  output: {
    path: path.resolve(__dirname, '../build/static'),
    filename: '[name]-[hash].js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: babelOptions
          },
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        loader: ExtractText.extract({
          fallbackLoader: 'style-loader',
          loader: ['css-loader?modules', 'postcss-loader']
        })
      }
    ]
  },
  plugins
};
