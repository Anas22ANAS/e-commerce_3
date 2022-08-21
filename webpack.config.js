const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const loader = require('sass-loader');

module.exports = {
    entry: './src/js/index.js',
    output:{
      publicPath: '/',
        path: path.resolve(__dirname, 'build'),
        filename:'js/bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(sass|css|scss)$/,
          use: [
            // Creates `style` nodes from JS strings
            {
              loader: MiniCssExtractPlugin.loader,
              options:{
                publicPath: '../'
              }
            },
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
        {
          test: /\.(png|jpe?g|gif|jfif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: "images",
              },
            },
          ],
        },
        {
          test: /\.(svg|eot|woff|woff2|ttf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: "fonts",
              },
            },
          ],
        },
        {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: require.resolve("jquery"),
        loader: "expose-loader",
        options: {
          exposes: ["$", "jQuery"],
        },
      },
      ],
    },
    devServer: {
      hot: false ,
      static: {
        directory: path.join(__dirname, 'build'),
      },
      devMiddleware: {
        writeToDisk: true,
      stats: 'errors-only',
      },
      compress: true,
      port: 63000,   
      open: true
    },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
      new HtmlWebpackPlugin({
        template: './src/type_1.html',
        filename: 'type_1.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/type_2.html',
        filename: 'type_2.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/type_3.html',
        filename: 'type_3.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/about.html',
        filename: 'about.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/contact.html',
        filename: 'contact.html'
      }),
      new HtmlWebpackPlugin({
        filename: 'css/style.css'
      }),
      
      new MiniCssExtractPlugin(),
  ],
};