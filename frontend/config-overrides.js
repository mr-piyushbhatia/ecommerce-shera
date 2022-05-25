const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
var CompressionPlugin = require("compression-webpack-plugin");

module.exports = function override(config, env) {
  config.plugins.push(
    new LodashModuleReplacementPlugin({
      collections: true,
      paths: true,
    })
  );
  config.plugins.push(
    new CompressionPlugin({
      filename: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.(js|css|json)$/,
      threshold: 8192,
      minRatio: 0.8,
      deleteOriginalAssets: true
    })
  );

  return config;
};
