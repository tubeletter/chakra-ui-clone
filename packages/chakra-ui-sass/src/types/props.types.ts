export interface IBaseComponentProps {
  /** Wrapper class */
  className?: string;
}

export interface ISizeProps<Size> {
  size?: Size;
}

export interface IChildrenProps<Children = React.ReactNode> {
  /** children */
  children?: Children;
}

export interface ITagNameProps {
  /** tagName */
  tagName?: React.ElementType<any>;
}
