import { StyleText } from '../../../foundation/typography/Text.styled';
import { StyleButton } from './Button.styled';

export interface ButtonProps {
  as?: React.ElementType;
  size: 'lg' | 'md' | 'sm' | 'xs';
  colorScheme: 'blue' | 'gray' | 'teal' | 'red' | 'orange' | 'yellow' | 'pink' | 'purple' | 'green';
  variant?: 'solid' | 'outline';
  children?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
const setIcon = (icon: React.ReactNode) => {
  return <figure className="icon">{icon}</figure>;
};

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
    <StyleButton as={as} size={size} colorScheme={colorScheme} variant={variant}>
      {leftIcon && setIcon(leftIcon)}
      {children && (
        <StyleText size={size} weight="semibold">
          {children}
        </StyleText>
      )}
      {rightIcon && setIcon(rightIcon)}
    </StyleButton>
  );
};
export default Button;
