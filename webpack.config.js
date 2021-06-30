const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

require('dotenv').config();

module.exports = {
  entry: {
    index: "./src/js/index.js",
    video: "./src/js/getVideoMedia.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },
  devServer: {
    // host: "0.0.0.0",
    // useLocalIp: true,
    // disableHostCheck: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9999,
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          }
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "./assets/"
        }
      },
      {
        test: /\.handlebars$/,
        loader: "handlebars-loader"
      },
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        handlebarsLoader: {}
      }
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.handlebars",
      title: "Captura Vídeo e Áudio Web API's",
      inject: "body",
      chunks: ["index"],
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      filename: "video.html",
      template: "./src/pages/video.handlebars",
      title: "Captura Vídeo",
      inject: "body",
      chunks: ["index","video"],
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      filename: "audio.html",
      template: "./src/pages/audio.handlebars",
      title: "Captura Áudio",
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      filename: "assinatura.html",
      template: "./src/pages/assinatura.handlebars",
      title: "Captura Assinatura",
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css"
    })
  ],
}