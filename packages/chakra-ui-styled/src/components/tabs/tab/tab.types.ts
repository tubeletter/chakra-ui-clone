import { styles } from './Tab';
export type sizeType = 'sm' | 'md' | 'lg';
export type tabType = {
  text?: string;
  size: sizeType;
  style: keyof typeof styles;
  active: Boolean;
};
