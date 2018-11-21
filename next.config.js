/* eslint-disable */
const withSCSS = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => { }
}

const webpackConfig = {
  webpack: (config) => {
    // deal with fonts
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg)$/,
      use: {
        loader: 'file-loader',
        options: {
          // limit: 100000,
          name: '[name].[hash].[ext]',
        },
      },
    });

    // config.devServer = config.devServer || {};
    // config.devServer.proxy = {
    //   '/lendApi': {
    //     target: 'https://libra.alpha.mo9.com/lendApi/',
    //     changeOrigin: true,
    //     secure: false,
    //     pathRewrite: { '^/lendApi': '' },
    //   },
    // };
    return config;
  },
};

const analyzerConfig = {
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html',
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: './bundles/client.html',
    },
  },
};

const otherConfig = {
  distDir: 'dist'
}


const allConfig = {
  ...webpackConfig,
  ...analyzerConfig,
  ...otherConfig,
};

module.exports = withBundleAnalyzer(
  withImages(
    withSCSS(
      withCSS(allConfig),
    ),
  ),
);
