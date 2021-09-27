import path from 'path';

module.exports = {
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [path.resolve(__dirname, 'cypress'), 'node_modules'],
    alias: {
      cypress: path.resolve(__dirname, 'cypress'),
    },
  },
  optimization: {
    // minimize the code will cause applitools/eyes.cypress to fail
    // https://github.com/applitools/eyes.cypress/issues/8
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.feature$/,
        use: [
          {
            loader: 'cypress-cucumber-preprocessor/loader',
          },
        ],
      },
    ],
  },
  node: {
    fs: 'empty' // avoid error in webpack with fs
  }
};