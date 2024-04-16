import { styles } from './Tab';
export type sizeType = 'sm' | 'md' | 'lg';
export type tabType = { size: sizeType; style: keyof typeof styles; active: Boolean };
