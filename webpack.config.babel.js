import webpack from 'webpack'
import path from 'path'
import config from 'config'
import theme from './theme.js'

const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    PORT_CONFIG: JSON.stringify(config),
  }),
  new webpack.HotModuleReplacementPlugin(),
]

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({ compress: { drop_debugger: true, drop_console: true } }),
  )
}

module.exports = {
  entry: './src/application.jsx',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'application.js',
  },
  plugins,
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot-loader',
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.less$/,
        loaders: [
          'style-loader',
          'css-loader',
          `less-loader?{"sourceMap":true,"modifyVars":${JSON.stringify(theme)}}`,
        ],
      },
      {
        test: /\.s[ac]ss$/,
        exclude: /application\.s[ac]ss$/,
        loaders: [
          'react-hot-loader',
          'style-loader',
          'css-loader?modules&camelCase=dashes&localIdentName=monoid-[name]__[local]-[hash:base64:8]',
          'sass-loader',
        ],
      },
      {
        test: /application\.s[ac]ss$/,
        loaders: [
          'react-hot-loader',
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    hot: true,
    contentBase: './docs',
    port: config.WEBPACK_DEV_SERVER_PORT || 8080,
    historyApiFallback: true,
  },
}
