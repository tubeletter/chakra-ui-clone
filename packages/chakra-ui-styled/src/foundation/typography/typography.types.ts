type HeadingSizeType = '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
type TextSizeType = '6xl' | '5xl' | '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';

export type HadingTypographyProps = {
  // eslint-disable-next-line no-unused-vars
  [key in HeadingSizeType]: { [key: string]: string };
};
export type TypographyProps = {
  // eslint-disable-next-line no-unused-vars
  [key in TextSizeType]: { [key: string]: string };
};
export interface TypoProps {
  [key: string]: string | { [key: string]: string };
}
export interface TypographyType {
  large: HadingTypographyProps;
  small: HadingTypographyProps;
  text: TypographyProps;
  fontFamily: TypoProps;
  fontWeight: TypoProps;
  lineHeight: TypoProps;
}

export type sStylingProps = { [key: string]: string };
