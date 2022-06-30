const path = require('path');
const glob = require('glob');

module.exports = {
  entry: {
    js: glob.sync("./src/**/*.js"),  
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devtool: 'inline-source-map',
  mode: "development",
  devServer: {
    static: "./dist",
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  }
};