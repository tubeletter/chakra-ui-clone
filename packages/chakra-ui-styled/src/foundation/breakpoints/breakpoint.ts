import { BreakpointsType } from './breakpoint.types';

export const BreakpointsSizes: BreakpointsType = {
  base: '0px',
  sm: '480px',
  md: '768px',
  lg: '962px',
  xl: '1280px',
  '2xl': '1536px'
};

const Breakpoints = {
  base: `@media screen and (min-width: ${BreakpointsSizes.base})`,
  sm: `@media screen and (min-width: ${BreakpointsSizes.sm})`,
  md: `@media screen and (min-width: ${BreakpointsSizes.md})`,
  lg: `@media screen and (min-width: ${BreakpointsSizes.lg})`,
  xl: `@media screen and (min-width: ${BreakpointsSizes.xl})`,
  '2xl': `@media screen and (min-width: ${BreakpointsSizes['2xl']})`
};

export default Breakpoints;
