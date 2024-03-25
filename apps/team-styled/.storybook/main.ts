import type { StorybookConfig } from '@storybook/nextjs';

import { join, dirname } from 'path';
import path from 'path';

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../../../packages/chakra-ui-styled/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-interactions')
  ],
  framework: {
    name: getAbsolutePath('@storybook/nextjs'),
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  //경로설정라인
 /*  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@chakra/ui-styled': path.resolve(__dirname, '../../../packages/chakra-ui-styled/src')
      };
    }
    return config;
  } */
  webpackFinal: async (config:any) => {
    config.resolve.modules = [
      path.resolve(__dirname, ".."),
      "node_modules",
      "styles",
    ];
    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.resolve(__dirname, "../components"),
      assets: path.resolve(__dirname, "../assets"),
    };
    return config;
  },
  //경로설정라인
};
export default config;
