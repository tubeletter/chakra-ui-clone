import { StyleText } from '../../../foundation/typography/Text.styled';
import * as S from './Button.styled';

export interface ButtonProps {
  as?: React.ElementType;
  size: 'lg' | 'md' | 'sm' | 'xs';
  colorScheme: 'blue' | 'gray' | 'teal' | 'red' | 'orange' | 'yellow' | 'pink' | 'purple' | 'green';
  variant?: 'solid' | 'outline';
  children?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = ({
  as = 'button',
  size = 'md',
  variant = 'solid',
  colorScheme,
  leftIcon,
  rightIcon,
  children
}: ButtonProps) => {
  return (
    <S.StyleButton as={as} size={size} colorScheme={colorScheme} variant={variant}>
      {leftIcon && <figure className="icon">{leftIcon}</figure>}
      {children && (
        <StyleText size={size} weight="semibold">
          {children}
        </StyleText>
      )}
      {rightIcon && <figure className="icon">{rightIcon}</figure>}
    </S.StyleButton>
  );
};
export default Button;
