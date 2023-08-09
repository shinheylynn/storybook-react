/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../.storybook/stories/**/*.mdx', '../.storybook/stories/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  refs: {
    react: {
      title: 'React Storybook Design System',
      url: 'https://64d324ff7e6d5b36b54f5921-htlmharozv.chromatic.com/',
    },
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-styling',
      options: {
        // Check out https://github.com/storybookjs/addon-styling/blob/main/docs/api.md
        // For more details on this addon's options.
        postCss: {
          implementation: require.resolve('postcss'),
        },
      },
    },
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
