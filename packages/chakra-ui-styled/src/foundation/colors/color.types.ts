export type colorType = {
  [key: string]: string | { [key: string | number]: string };
};
export type colorProps = {
  colorCode: string;
  color?: string;
  number?: string;
};

export interface colorTypeProps {
  black: colorType;
  white: colorType;
  whiteAlpha: colorType;
  blackAlpha: colorType;
  gray: colorType;
  red: colorType;
  orange: colorType;
  yellow: colorType;
  green: colorType;
  teal: colorType;
  blue: colorType;
  cyan: colorType;
  purple: colorType;
  pink: colorType;
}
