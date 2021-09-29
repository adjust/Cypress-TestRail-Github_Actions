
const webpack = require("@cypress/webpack-preprocessor");

const webpackOptions = require("../../webpack.config");

module.exports = (on, config) => {
  on("file:preprocessor", webpack({ webpackOptions }));

  // Select browser
  on("before:browser:launch", (browser = {}, launchOptions) => {
    if (
      browser.name === "chrome" ||
      browser.name === "firefox" ||
      browser.name === "edge:canary"
    ) {
      launchOptions.args.push("--incognito");

      return launchOptions;
    }
  });

  return config;
};