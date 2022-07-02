const path = require('path');
const glob = require('glob');

module.exports = env => {
  return {
    entry: {
      ts: glob.sync("./src/**/*.ts"),  
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource'
        },
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules|\.d\.ts$/
        },
        {
            test: /\.d\.ts$/,
            loader: 'ignore-loader'
        }
      ],
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    devtool: 'inline-source-map',
    mode: env === "production" ? "production" : "development",
    devServer: {
      static: "./dist",
    },
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    }
  }
};
