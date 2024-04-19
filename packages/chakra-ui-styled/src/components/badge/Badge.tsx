import { StyleText } from '../../foundation/typography/Text.styled';
import { StyleBadge } from './Badge.styled';

export type colorSchemeType = 'blue' | 'gray' | 'teal' | 'red' | 'orange' | 'yellow' | 'pink' | 'purple' | 'green';

export interface BadgeProps {
  colorScheme: colorSchemeType;
  variant: 'solid' | 'subtle' | 'outline';
  children: React.ReactNode;
}

const Badge = ({ variant = 'solid', colorScheme, children }: BadgeProps) => {
  return (
    <StyleBadge colorScheme={colorScheme} variant={variant}>
      <StyleText size="xs" weight="bold">
        {children}
      </StyleText>
    </StyleBadge>
  );
};
export default Badge;
