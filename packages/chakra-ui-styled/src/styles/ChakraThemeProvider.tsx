import { ThemeProvider } from 'styled-components';
import { colorPalette2 } from '../foundation/colors/colorPalette';
import { IColors } from '../foundation/colors/color.types';

import Breakpoints from '../foundation/breakpoints/breakpoint';
import { BreakpointsType } from '../foundation/breakpoints/breakpoint.types';

import { Spacings } from '../foundation/spacings/spacing';
import { SpacingsType } from '../foundation/spacings/spacing.types';

import { Shadows } from '../foundation/shadows/shadow';
import { ShadowsType } from '../foundation/shadows/shadows.types';

import { RadiiType } from '../foundation/radii/radii.types';
import { Radii } from '../foundation/radii/radii';

export const ChakraThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      theme={{
        colors: {
          ...colorPalette2
        },
        breakpoint: {
          ...Breakpoints
        },
        spacing: {
          ...Spacings
        },
        shadow: {
          ...Shadows
        },
        radii: {
          ...Radii
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
    breakpoint: BreakpointsType;
    spacing: SpacingsType;
    shadow: ShadowsType;
    radii: RadiiType;
  }
}
