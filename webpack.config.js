const path = require('path');
const htmlWebpack = require('html-webpack-plugin');

module.exports = { // commonJS syntax
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif|mov)$/,
        use: [
          'file-loader',
        ],
      },
    ]
  },
  plugins: [
    new htmlWebpack({
      //use the index.html file as our template to create the html in bundle
      template: './public/index.html'
    })
  ]
};