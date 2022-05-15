const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
module.exports = function override(config, env) {
    
    config.plugins.push(new LodashModuleReplacementPlugin({
        collections: true,
        paths: true,
      }));
    
    return config;
  }