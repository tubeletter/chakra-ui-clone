import { SelectStyle } from './Select.styled';

export type colorSchemeType = 'whiteAlpha' | 'blackAlpha' | 'gray' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'cyan' | 'purple' | 'pink' ;
export interface SelectProps {
  size: 'xs' | 'sm' | 'md' | 'lg';
  colorScheme: colorSchemeType;
  isInvalid?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  placeholder: string;
}

const Select = ({placeholder = 'Hello', size='md', colorScheme, disabled = false, readOnly = false, isInvalid = false }: SelectProps) => {
  return (
  <SelectStyle placeholder={placeholder} size={size} colorScheme={colorScheme} disabled={disabled} readOnly={readOnly} isInvalid={isInvalid}>
    <option >{placeholder}</option>
  </SelectStyle>
  )
};
export default Select;
