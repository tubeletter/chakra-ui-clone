//import styled from './CardHeader.module.scss';
import { ICardHeaderProps } from './CardHeader.types';

export const CardHeader = ({ className, children, ...rest }: ICardHeaderProps) => {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};
