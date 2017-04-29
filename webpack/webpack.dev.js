const path = require('path');
const Webpack = require('webpack');

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, '../src/client/index.tsx'),
    vendor: ['react']
  },
  output: {
    path: path.resolve(__dirname, '../.tmp/static'),
    publicPath: '/',
    filename: '[name].js'
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
            options: {
              presets: [
                [
                  'es2015', {
                    modules: false
                  }
                ],
                'react',
                'stage-3'
              ],
            }
          },
          {
            loader: 'ts-loader'
          }
        ]
      }, 
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader?modules', 'postcss-loader']
      }
    ]
  },
  plugins: [
    new Webpack.NamedModulesPlugin(),
    new Webpack.SourceMapDevToolPlugin({exclude: /vendor/}),
    new Webpack.LoaderOptionsPlugin({debug: true}),
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('dev')
    })
  ],
  performance: {
    hints: false
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../.tmp/static'),
    proxy: {
      '*': 'http://localhost:3000'
    }
  },
  devtool: 'cheap-eval-source-map'
};