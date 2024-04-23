import { HTMLAttributes } from 'react';
import { IBaseComponentProps, IChildrenProps } from '../../../types/props.types';

export interface ICardBodyProps extends IBaseComponentProps, IChildrenProps, HTMLAttributes<HTMLElement> {}
