import type { Preview } from '@storybook/react';

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
    name: 'lg - min-width : 962px',
    styles: {
      width: '768px',
      height: '500px'
    }
  },
  xl: {
    name: 'xl - min-width : 1280px',
    styles: {
      width: '768px',
      height: '500px'
    }
  },
  '2xl': {
    name: '2xl - min-width : 1536px',
    styles: {
      width: '768px',
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

export default preview;
