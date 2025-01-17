module.exports = {
  "stories": ["../src/*.stories.mdx", "../src/**/**/*.stories.@(ts|tsx)"],
  "addons": ["@storybook/addon-essentials", '@storybook/addon-interactions'],

  "framework": {
    name: "@storybook/react-webpack5",
    options: {}
  },

  docs: {
    autodocs: true
  },

  features: {
    storyStoreV7: false
  }
};