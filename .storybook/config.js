import { configure, addParameters, addDecorator } from "@storybook/react";
// import { create } from '@storybook/theming';
import { withInfo } from "@storybook/addon-info";
import { withA11y } from "@storybook/addon-a11y";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import centered from "@storybook/addon-centered/react";
import { themes } from "@storybook/theming";

const newViewports = {
  //   kindleFire2: {
  //     name: 'Kindle Fire 2',
  //     styles: {
  //       width: '600px',
  //       height: '963px',
  //     },
  //   },
  //   kindleFireHD: {
  //     name: 'Kindle Fire HD',
  //     styles: {
  //       width: '533px',
  //       height: '801px',
  //     },
  //   },
};

addDecorator(
  withInfo({
    inline: false
  })
);
addDecorator(withA11y);
addDecorator(centered);
addParameters({
  options: {
    isFullscreen: false,
    showAddonsPanel: true,
    showSearchBox: true,
    panelPosition: "bottom",
    hierarchySeparator: /\./,
    // hierarchyRootSeparator: /\|/,
    enableShortcuts: true,
    theme: themes.dark
    // theme: create({
    //   base: 'light',
    //   brandTitle: 'CRA Kitchen Sink',
    //   brandUrl: 'https://github.com/storybookjs/storybook/tree/master/examples/cra-kitchen-sink',
    //   gridCellSize: 12,
    // }),
    // storySort: (a: any, b: any) =>
    //   a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, { numeric: true }),
  },
  backgrounds: [
    { name: "dark", value: "#242424", default: true },
    { name: "normal", value: "#ffffff" },
    { name: "twitter", value: "#00aced" },
    { name: "facebook", value: "#3b5998" }
  ],
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...newViewports
    }
  }
});

// automatically import all files ending in *.stories.js
configure(require.context("../src", true, /\.stories\.tsx?$/), module);
