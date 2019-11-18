module.exports = {
  mode: 'development',

  // Entry Point
  entry: "./src/index.tsx",
  // Output Point
  output: {
    filename: "main.js",
    path: __dirname + "/dist"
  },

  // add sourcemap for debugging
  devtool: "source-map",

  devServer: {
    contentBase: './',
    publicPath: './dist',
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  module: {
    rules: [
      // .ts or .tsx will be transfiled by ts-loader
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
    ]
  },
};