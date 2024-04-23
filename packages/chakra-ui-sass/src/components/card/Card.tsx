import styled from './Card.module.scss';
import { ICardProps } from './Card.types';
import { CardHeader } from './header/CardHeader';
import { CardBody } from './body/CardBody';
import { CardFooter } from './footer/CardFooter';

export const Card = ({ variant, size = 'md', children, className = '', ...rest }: ICardProps) => {
  return (
    <>
      <div className={`${styled.card} ${styled[size]} ${styled[variant]} ${className}`} {...rest}>
        {children}
      </div>
    </>
  );
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
