const path = require('path');

module.exports = {
  entry: {
    "index": "./src/index.tsx",
  },
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      
      {
        test: /\.css?$/,
        use: ["style-loader", "css-loader"]
      },
      
      {
        test: /\.scss?$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          },
          "postcss-loader", "sass-loader"
        ],
      },
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  }
};
