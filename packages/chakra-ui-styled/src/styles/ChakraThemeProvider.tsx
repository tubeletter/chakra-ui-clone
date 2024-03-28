import { ThemeProvider } from 'styled-components';
import { Colors } from '../foundation/colors/color';
import { ColorsType } from '../foundation/colors/color.types';

export const ChakraThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      theme={{
        colors: {
          ...Colors
        }
      }}
    >
      {children}
    </ThemeProvider>
  );
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsType;
  }
}
