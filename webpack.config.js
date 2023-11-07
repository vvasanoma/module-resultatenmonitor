const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

 const moduleFederationConfig = withModuleFederationPlugin({

  remotes: {
    "./AppModule": "http://localhost:4201/remoteEntry.js",    
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});
moduleFederationConfig.output.publicPath = 'http://localhost:4201'
module.exports = moduleFederationConfig