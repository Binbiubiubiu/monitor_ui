const path = require("path");

module.exports = [
  {
    name: "@storybook/preset-typescript",
    options: {
      tsLoaderOptions: {
        configFile: path.resolve(__dirname, "../tsconfig-storybook.json")
      },
      tsDocgenLoaderOptions: {
        tsconfigPath: path.resolve(__dirname, "../tsconfig-storybook.json")
      },
      include: [path.resolve(__dirname, "../src")]
    }
  },
  {
    name: "@storybook/addon-storysource/preset",
    options: {
      rule: {
        // test: [/\.stories\.jsx?$/], This is default
        test: [/\.stories\.tsx?$/],
        include: [path.resolve(__dirname, "../src")] // You can specify directories
      },
      loaderOptions: {
        parser: "typescript",
        prettierConfig: { printWidth: 80, singleQuote: false }
      }
    }
  },
  {
    name: "@storybook/preset-scss",
    options: {
      cssLoaderOptions: {
        // modules: true,
        // localIdentName: "[name]__[local]--[hash:base64:5]"
      }
    }
  }
];
