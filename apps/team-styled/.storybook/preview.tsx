import React, { useContext } from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import themes from '../../../packages/chakra-ui-styled/src/theme/Theme';
// import themes from '@/';
export const customView = {
  base: {
    name: 'base - min-width : 0px',
    styles: {
      width: '0px',
      height: '500px'
    }
  },
  sm: {
    name: 'sm - min-width : 480px',
    styles: {
      width: '480px',
      height: '500px'
    }
  },
  md: {
    name: 'md - min-width : 768px',
    styles: {
      width: '768px',
      height: '500px'
    }
  },
  lg: {
    name: 'lg - min-width : 992px',
    styles: {
      width: '992px',
      height: '500px'
    }
  },
  xl: {
    name: 'xl - min-width : 1280px',
    styles: {
      width: '1280px',
      height: '500px'
    }
  },
  '2xl': {
    name: '2xl - min-width : 1536px',
    styles: {
      width: '1536px',
      height: '500px'
    }
  }
};
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    viewport: {
      viewports: customView
    }
  }
};
export const decorators = [
  (Story, context) => (
    <>
      <ThemeProvider theme={themes}>
        <Story {...context} />
      </ThemeProvider>
    </>
  )
];
export default preview;
