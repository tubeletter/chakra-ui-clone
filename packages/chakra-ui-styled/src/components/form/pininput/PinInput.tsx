import { StylePinInput, PinInputField } from './PinInput.style';

export type colorSchemeType =
  | 'whiteAlpha'
  | 'blackAlpha'
  | 'gray'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'teal'
  | 'blue'
  | 'cyan'
  | 'purple'
  | 'pink';
export interface PinInputProps {
  size: 'xs' | 'sm' | 'md' | 'lg';
  colorScheme: colorSchemeType;
  numOfInputs: number;
}

const PinInput = ({ size = 'md', colorScheme, numOfInputs = 4 }: PinInputProps) => {
  const inputArray = Array.from({ length: numOfInputs });
  const onFocusInput = (e: React.KeyboardEvent) => {
    const pinInput = e.target as HTMLInputElement;
    const value = pinInput.value;
    const maxLength = Number(pinInput.getAttribute('maxlength'));

    if (e.code === 'Backspace') {
      if (!pinInput.previousSibling) return;
      !value ? (pinInput.previousSibling as HTMLInputElement).focus() : pinInput.focus();
    }
    if (value.length === maxLength && e.code !== 'Backspace') {
      if (!pinInput.nextSibling) return;
      (pinInput.nextSibling as HTMLInputElement).focus();
    }
  };

  return (
    <StylePinInput size={size} colorScheme={colorScheme} numOfInputs={numOfInputs}>
      {inputArray.map((_, index) => {
        return <PinInputField className="pin-input" key={'pin-input' + index} onKeyUp={onFocusInput} />;
      })}
    </StylePinInput>
  );
};
export default PinInput;
