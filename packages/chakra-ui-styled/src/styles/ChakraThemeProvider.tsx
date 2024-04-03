import { ThemeProvider } from 'styled-components';

import { colorPalette } from '../foundation/colors/colorPalette';
import { colorTypeProps } from '../foundation/colors/color.types';

import Breakpoints from '../foundation/breakpoints/breakpoint';
import { BreakpointsType } from '../foundation/breakpoints/breakpoint.types';

import { Spacings } from '../foundation/spacings/spacing';
import { SpacingsType } from '../foundation/spacings/spacing.types';

import { Shadows } from '../foundation/shadows/shadow';
import { ShadowsType } from '../foundation/shadows/shadows.types';

import { RadiiType } from '../foundation/radii/radii.types';
import { Radii } from '../foundation/radii/radii';

import { large, small, text } from '../foundation/typography/typography';
import { TypographyType } from '../foundation/typography/typography.types';

import { Containers } from '../foundation/containers/container';
import { ContainersType } from '../foundation/containers/container.types';

export const theme = {
  color: {
    ...colorPalette
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
  },
  typo: {
    large,
    small,
    text
  },
  container: {
    ...Containers
  }
};

export const ChakraThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    color: colorTypeProps;
    breakpoint: BreakpointsType;
    spacing: SpacingsType;
    shadow: ShadowsType;
    radii: RadiiType;
    typo: TypographyType;
    container: ContainersType;
  }
}
