const path = require('path');

module.exports = {
  entry: './src/app.js', // your main JS entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  mode: 'development', // or 'production' when you go live
  devtool: 'source-map', // for debugging, optional
};