import { StyleText } from '../../../foundation/typography/Text.styled';
import { RadioForm, Label } from './Radio.styled';

export type colorSchemeType = 'blue' | 'teal' | 'green' | 'cyan' | 'purple' | 'pink';
export interface RadioProps {
  size: 'sm' | 'md' | 'lg';
  colorScheme: colorSchemeType;
  defaultChecked?: boolean;
  isDisabled?: boolean;
  text: string;
}

const Radio = ({ size = 'md', defaultChecked = true, isDisabled = false, colorScheme, text }: RadioProps) => {
  return (
    <Label size={size} colorScheme={colorScheme} defaultChecked={defaultChecked} isDisabled={isDisabled} text="" >
      <RadioForm />
      <span />
      <StyleText size="sm" weight="normal">
        {text}
      </StyleText>
    </Label>
  );
};
export default Radio;