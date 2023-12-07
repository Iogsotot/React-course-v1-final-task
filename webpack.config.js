import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import ESLintPlugin from 'eslint-webpack-plugin'
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
// import * as packageJson from './package.json'
import * as packageJson from './package.json' assert { type: 'json' }

const __filename = new URL(import.meta.url).pathname
const __dirname = path.dirname(__filename)

const webpackConfig = (env) => ({
  entry: './src/index.tsx',
  ...(env.production || !env.development ? {} : { devtool: 'eval-source-map' }),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [new TsconfigPathsPlugin()],
  },
  output: {
    path: path.resolve(__dirname, '/dist'),
    filename: 'build.js',
  },
  devServer: {
    static: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg|jpg|png)$/,
        type: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env.PRODUCTION': env.production || !env.development,
      'process.env.NAME': JSON.stringify(packageJson.name),
      'process.env.VERSION': JSON.stringify(packageJson.version),
    }),
    new ForkTsCheckerWebpackPlugin(),
    new ESLintPlugin({ files: './src/**/*.{ts,tsx,js,jsx}' }),
  ],
})

export default webpackConfig
