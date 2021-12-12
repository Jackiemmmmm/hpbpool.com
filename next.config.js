const path = require('path');
const withSourceMaps = require('@zeit/next-source-maps');
const { i18n } = require('./next-i18next.config');
// const SentryCliPlugin = require('@sentry/webpack-plugin');

const alias = {
  '~theme': path.join(__dirname, 'theme'),
  '~svg-components': path.join(__dirname, 'public/static/svg-components'),
  '~images': path.join(__dirname, 'public/images'),
  '~components': path.join(__dirname, 'components'),
  '~hooks': path.join(__dirname, 'hooks'),
  '~gql': path.join(__dirname, 'gql'),
  '~utils': path.join(__dirname, 'utils'),
  '~graphql': path.join(__dirname, 'graphql'),
};

const withApolloPath = path.join(__dirname, '../..', '/node_modules/next-with-apollo/');

// const staticFilePathPrefix = () => {
//   if (process.env.NODE_ENV === 'production') {
//     return `${process.env.ASSETS_CND_HOST}/web_assets/projectg-fe-student-portal/${process.env.IMAGE_TAG}`;
//   }

//   return '';
// };

const publicFilePathPrefix = () => {
  // if (process.env.NODE_ENV === 'production') {
  //   return `${process.env.ASSETS_CND_HOST}/web_assets/projectg-fe-student-portal/${process.env.IMAGE_TAG}/_next`;
  // }
  return '';
};

// const assetPrefix = staticFilePathPrefix();

module.exports = withSourceMaps({
  publicRuntimeConfig: {
    AUTHORIZATION: process.env.REACT_APP_GQL_REQUEST_MARK,
    DOMAIN: process.env.REACT_APP_DOMAIN,
    ENDPOINT: process.env.REACT_APP_GQL_ENDPOINT,
    PUBLIC_FILE_PATH_PREFIX: publicFilePathPrefix(),
  },
  // assetPrefix,
  webpack: (config, { defaultLoaders }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config
    config.resolve.alias = { ...config.resolve.alias, ...alias };
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      include: [withApolloPath],
      use: [defaultLoaders.babel],
    });
    // config.plugins.concat([
    //   new SentryCliPlugin({
    //     include: '.',
    //     ignoreFile: '.sentrycliignore',
    //     ignore: ['node_modules', 'webpack.config.js'],
    //     configFile: 'sentry.properties',
    //     dryRun: true,
    //     release: 'foo',
    //   }),
    // ]);
    return config;
  },
  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  },
  transpileModules: ['next-with-apollo'],
  i18n,
});
