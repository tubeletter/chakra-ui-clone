import { StyleText } from '../../foundation/typography/Text.styled';
import { TagStyle } from './Tag.styled';

export type colorSchemeType = 'blue' | 'gray' | 'teal' | 'red' | 'orange' | 'yellow' | 'pink' | 'purple' | 'green';

export interface TagProps {
  variant: 'solid' | 'subtle' | 'outline';
  size: 'lg' | 'md' | 'sm';
  colorScheme: colorSchemeType;
  children: React.ReactNode;
  removeButton?: boolean;
}
const RemoveIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path
        opacity="0.5"
        d="M5 3.88906L8.88906 0L10 1.11094L6.11094 5L10 8.88906L8.88906 10L5 6.11094L1.11094 10L0 8.88906L3.88906 5L0 1.11094L1.11094 0L5 3.88906Z"
        fill="currentColor"
      />
    </svg>
  );
};
const Tag = ({ children, colorScheme, variant, removeButton, size }: TagProps) => {
  return (
    <TagStyle variant={variant} colorScheme={colorScheme} size={size}>
      {children && <StyleText size={size}>{children}</StyleText>}
      {removeButton && (
        <button className="tag-remove-btn">
          <RemoveIcon />
        </button>
      )}
    </TagStyle>
  );
};

export default Tag;
