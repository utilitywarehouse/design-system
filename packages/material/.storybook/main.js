module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: ["@storybook/addon-essentials", "@storybook/addon-viewport"],
  features: {
    emotionAlias: false,
  },
};
