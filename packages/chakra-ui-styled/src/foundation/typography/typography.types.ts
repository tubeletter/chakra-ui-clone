export type HeadingProps = {
  as?: React.ElementType;
  children?: React.ReactNode;
  value: '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  size: 'large' | 'small';
};
export type TextProps = {
  value: '6xl' | '5xl' | '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  children?: React.ReactNode;
  size: 'regular' | 'medium' | 'semibold' | 'bold' | 'extraBold' | 'storybook';
};
export type HeadingTypoProps = {
  [key: string]: string | [key: string] | { [key: string]: string };
};
type typoType = {
  [key: string]: string;
};

export type TypographyProps = {
  fontFamily: string;
  [key: string]:
    | string
    | {
        fontWeight: string;
        [key: string]:
          | string
          | {
              [key: string]: string;
            };
      };
};
export interface TypographyType {
  large: TypographyProps;
  small: TypographyProps;
  text: TypographyProps;
}

export type StylingProps = { [key: string]: string };
