const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    hot:false,
    port: 9003,
    devMiddleware: {
      writeToDisk: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          minimize: true,
        },
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        exclude:/custom\.scss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          "css-loader",
          "sass-loader"
        ],
      },
      {
        test: /custom\.scss$/i,
        use:[
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          "rtlcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator:{
          filename: './images/ [name].[ext]',
        }
      },
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/i,
        type: 'asset/resource',
        generator:{
          filename: './fonts/ [name].[ext]',
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/product.html",
      filename: "product.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/checkout.html",
      filename: "checkout.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/payment.html",
      filename: "payment.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/search.html",
      filename: "search.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/contact.html",
      filename: "contact.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/style.css",
    }),
    new CssMinimizerPlugin(),
  ],
};
