import { StyleText } from '../../../foundation/typography/Text.styled';
import { SwitchForm, Label } from './Switch.styled';

export type colorSchemeType = 'blue' | 'teal' | 'green' | 'cyan' | 'purple' | 'pink';
export interface SwitchProps {
  size: 'sm' | 'md' | 'lg';
  colorScheme: colorSchemeType;
  defaultChecked?: boolean;
  isDisabled?: boolean;
  text: string;
}

const Switch = ({ size = 'md', defaultChecked = true, isDisabled = false, colorScheme, text }: SwitchProps) => {
  return (
    <Label size={size} colorScheme={colorScheme} defaultChecked={defaultChecked} isDisabled={isDisabled} text="" >
      <SwitchForm />
      <span />
      <StyleText size="md" weight="normal">
        {text}
      </StyleText>
    </Label>
  );
};
export default Switch;