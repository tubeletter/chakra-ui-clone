export type HeadingProps = {
  as?: React.ElementType;
  children?: React.ReactNode;
  value: '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  size: 'large' | 'small';
};
export type TextProps = {
  value: '6xl' | '5xl' | '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  children?: React.ReactNode;
};
export type TypographyProps = {
  [key: string]: string | { [key: string]: string };
};
export interface TypographyType {
  large: TypographyProps;
  small: TypographyProps;
  text: TypographyProps;
}

export type sStylingProps = { [key: string]: string };
