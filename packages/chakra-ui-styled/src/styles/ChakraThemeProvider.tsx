import { ThemeProvider } from 'styled-components';
import { colorPalette2 } from '../foundation/colors/colorPalette';
import { IColors } from '../foundation/colors/color.types';

export const ChakraThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      theme={{
        colors: {
          ...colorPalette2
        }
      }}
    >
      {children}
    </ThemeProvider>
  );
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IColors;
  }
}
