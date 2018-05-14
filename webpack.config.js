const path = require('path');

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'client.js',
  },
//   externals: nodeExternals(),
//   plugins: [
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: `'production'`
//       }
//     })
//   ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
};
