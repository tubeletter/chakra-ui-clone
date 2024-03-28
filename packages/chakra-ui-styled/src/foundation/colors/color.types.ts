export type colorType = {
  [key: string]: string | { [key: string]: string };
};
export type colorProps = {
  colorCode: string;
  color?: string;
  number?: string;
};

export interface IColors {
  black: string;
  red: string;
}
