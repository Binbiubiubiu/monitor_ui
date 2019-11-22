const path = require("path");

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  // config.module.rules.push({
  //   test: /\.scss$/,
  //   use: [
  //     'style-loader',
  //     {
  //       loader: 'css-loader',
  //       options: {
  //         modules: true,
  //         localIdentName: '[name]__[local]___[hash:base64:5]',
  //       },
  //     },
  //     'sass-loader',
  //   ],
  //   include: path.resolve(__dirname, '../'),
  // });

  config.resolve.alias["@"] = path.resolve(__dirname, "../src");

  config.module.rules[4].use.push({
    loader: "style-resources-loader",
    options: {
      patterns: [
        path.resolve(__dirname, "..", "src/styles/functions/index.scss"),
        path.resolve(__dirname, "..", "src/styles/variables/index.scss")
      ]
    }
  });

  config.externals = {
    AMap: "window.AMap"
  };

  // config.module.rules.push({
  //   test: /\.stories\.tsx?$/,
  //   loaders: [
  //     {
  //       loader: require.resolve('@storybook/source-loader'),
  //       options: { parser: 'typescript' },
  //     },
  //   ],
  //   enforce: 'pre',
  // });

  // Return the altered config
  return config;
};
