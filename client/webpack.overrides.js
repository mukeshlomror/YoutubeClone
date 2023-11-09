const webpack = require('webpack');

module.exports = function override(config, env) {
    config.resolve.fallback = {
           "http": require.resolve("stream-http"),
            "url": require.resolve("url"),
            "assert": require.resolve("assert"),
            "stream": require.resolve("stream-browserify"),
            "https":require.resolve("https-browserify"),
            "zlib": require.resolve("browserify-zlib"),
    };

    config.plugins.push(
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        })
    );

    return config;
}

