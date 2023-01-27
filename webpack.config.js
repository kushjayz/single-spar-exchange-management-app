const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  webpackConfigEnv.externals = ['@gtn/Authentication'];
  const defaultConfig = singleSpaDefaults({
    orgName: "gtn",
    projectName: "ExchangeManagement",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
  });
};
