import { ICardBodyProps } from './CardBody.types';
import styled from './CardBody.module.scss';

/**
 * Card Body
 * @param param0
 * @returns
 */
export const CardBody = ({ children, className, ...rest }: ICardBodyProps) => {
  return (
    <div className={`${styled.body} ${className}`} {...rest}>
      {children}
    </div>
  );
};
