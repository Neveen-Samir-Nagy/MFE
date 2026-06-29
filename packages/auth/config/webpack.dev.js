const {merge} = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common.js');
const packageJsonDeps = require('../package.json').dependencies;

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8082,
        historyApiFallback: true,
        // {
        //     index: '/index.html'
        // }
    },
    output: {
        publicPath: `http://localhost:8082/`,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'auth',
            filename: 'remoteEntry.js',
            exposes: {
                './AuthApp': './src/bootstrap'
            },
            shared: packageJsonDeps,
        }),
    ],
};

module.exports = merge(commonConfig, devConfig);