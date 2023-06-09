import type { StorybookConfig } from "@storybook/react-vite"
const config: StorybookConfig = {
  stories: [
    "../src/components/Button/*.stories.tsx",
    "../src/components/Input/*.stories.tsx",
    "../src/components/ProgressBar/*.stories.tsx",
    "../src/pages/**/*.stories.mdx",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-styling",
      options: {
        postCss: true,
      },
    },
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
}
export default config
