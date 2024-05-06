import { HTMLAttributes } from 'react';
import { IChildrenProps } from '../../types/props.types';

export interface IBadgeProps extends IChildrenProps, HTMLAttributes<HTMLElement> {
  variant: 'default' | 'outline' | 'subtle';
  color: 'default' | 'blue' | 'teal' | 'green' | 'red' | 'purple' | 'pink' | 'orange';
}
