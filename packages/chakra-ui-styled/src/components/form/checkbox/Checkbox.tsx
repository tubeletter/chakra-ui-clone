import { StyleText } from '../../../foundation/typography/Text.styled';
import { CheckboxForm, Label } from './Checkbox.styled';


export type colorSchemeType = 'blue' | 'teal' | 'green' | 'cyan' | 'purple' | 'pink';
export interface CheckboxProps {
  size: 'sm' | 'md' | 'lg';
  colorScheme: colorSchemeType;
  isChecked?: boolean;
  isDisabled?: boolean;
  isIndeterminate?: boolean;
  text: string;
}

const Checkbox = ({ size = 'md', isChecked = true, isDisabled = false, isIndeterminate = true, colorScheme, text }: CheckboxProps) => {
  return (
    <Label size={size} colorScheme={colorScheme} isChecked={isChecked} isDisabled={isDisabled} isIndeterminate={isIndeterminate} text="" >
      <CheckboxForm />
      <span />
      <StyleText size="sm" weight="normal">
        {text}
      </StyleText>
    </Label>
  );
};
export default Checkbox;