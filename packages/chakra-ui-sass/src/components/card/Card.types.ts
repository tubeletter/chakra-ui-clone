import { HTMLAttributes } from 'react';
import { IBaseComponentProps, IChildrenProps, ISizeProps } from '../../types/props.types';
import { Large, Medium, Small } from '../../types/size.types';

export interface ICardProps
  extends IBaseComponentProps,
    ISizeProps<Large | Medium | Small>,
    IChildrenProps,
    HTMLAttributes<HTMLElement> {
  /** variant */
  variant: 'elvated' | 'outline' | 'filled';
}
