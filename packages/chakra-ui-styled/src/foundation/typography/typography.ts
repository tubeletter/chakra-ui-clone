import { HadingTypographyProps } from './typography.types';

export const fontFamily = {
  fontFamily: 'Pretendard Variable'
};

const fontSize = {
  72: '4.5rem',
  60: '3.75rem',
  48: '3rem',
  36: '2.25rem',
  30: '1.875rem',
  24: '1.5rem',
  20: '1.25rem',
  18: '1.125rem',
  16: '1rem',
  14: '0.875rem',
  12: '0.75rem'
};
const lineHeight = {
  150: '150%',
  133: '133%',
  120: '120%',
  100: '100%'
};

export const fontWeight = {
  bold: '700',
  semibold: '600',
  medium: '500',
  normal: '400'
};

export const large: HadingTypographyProps = {
  '4xl': {
    fontSize: fontSize[72],
    lineHeight: lineHeight[100],
    fontWeight: fontWeight.bold
  },
  '3xl': {
    fontSize: fontSize[60],
    lineHeight: lineHeight[100],
    fontWeight: fontWeight.bold
  },
  '2xl': {
    fontSize: fontSize[48],
    lineHeight: lineHeight[100],
    fontWeight: fontWeight.bold
  },
  xl: {
    fontSize: fontSize[36],
    lineHeight: lineHeight[133],
    fontWeight: fontWeight.bold
  },
  lg: {
    fontSize: fontSize[30],
    lineHeight: lineHeight[133],
    fontWeight: fontWeight.bold
  },
  md: {
    fontSize: fontSize[20],
    lineHeight: lineHeight[120],
    fontWeight: fontWeight.bold
  },
  sm: {
    fontSize: fontSize[16],
    lineHeight: lineHeight[120],
    fontWeight: fontWeight.bold
  },
  xs: {
    fontSize: fontSize[14],
    lineHeight: lineHeight[120],
    fontWeight: fontWeight.bold
  }
};
export const small: HadingTypographyProps = {
  '4xl': {
    fontSize: fontSize[60],
    lineHeight: lineHeight[100],
    fontWeight: fontWeight.bold
  },
  '3xl': {
    fontSize: fontSize[48],
    lineHeight: lineHeight[100],
    fontWeight: fontWeight.bold
  },
  '2xl': {
    fontSize: fontSize[36],
    lineHeight: lineHeight[120],
    fontWeight: fontWeight.bold
  },
  xl: {
    fontSize: fontSize[30],
    lineHeight: lineHeight[133],
    fontWeight: fontWeight.bold
  },
  lg: {
    fontSize: fontSize[24],
    lineHeight: lineHeight[133],
    fontWeight: fontWeight.bold
  },
  md: {
    fontSize: fontSize[20],
    lineHeight: lineHeight[120],
    fontWeight: fontWeight.bold
  },
  sm: {
    fontSize: fontSize[16],
    lineHeight: lineHeight[120],
    fontWeight: fontWeight.bold
  },
  xs: {
    fontSize: fontSize[14],
    lineHeight: lineHeight[120],
    fontWeight: fontWeight.bold
  }
};
export const text = {
  '6xl': {
    fontSize: fontSize[60],
    lineHeight: lineHeight[100],
    fontWeight: fontWeight.normal
  },
  '5xl': {
    fontSize: fontSize[48],
    lineHeight: lineHeight[100],
    fontWeight: fontWeight.normal
  },
  '4xl': {
    fontSize: fontSize[36],
    lineHeight: lineHeight[150],
    fontWeight: fontWeight.normal
  },
  '3xl': {
    fontSize: fontSize[30],
    lineHeight: lineHeight[150],
    fontWeight: fontWeight.normal
  },
  '2xl': {
    fontSize: fontSize[24],
    lineHeight: lineHeight[150],
    fontWeight: fontWeight.normal
  },
  xl: {
    fontSize: fontSize[20],
    lineHeight: lineHeight[150],
    fontWeight: fontWeight.normal
  },
  lg: {
    fontSize: fontSize[18],
    lineHeight: lineHeight[150],
    fontWeight: fontWeight.normal
  },
  md: {
    fontSize: fontSize[16],
    lineHeight: lineHeight[150],
    fontWeight: fontWeight.normal
  },
  sm: {
    fontSize: fontSize[14],
    lineHeight: lineHeight[150],
    fontWeight: fontWeight.normal
  },
  xs: {
    fontSize: fontSize[12],
    lineHeight: lineHeight[133],
    fontWeight: fontWeight.normal
  }
};
