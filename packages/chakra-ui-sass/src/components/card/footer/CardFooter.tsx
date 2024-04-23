import { ICardFooterProps } from './CardHeader.types';
//import styled from './CardBody.module.scss';

export const CardFooter = ({ className, children }: ICardFooterProps) => {
  return <div className={className}>{children}</div>;
};
