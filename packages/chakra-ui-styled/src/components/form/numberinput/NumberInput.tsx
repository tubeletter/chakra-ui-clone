import { StyleNumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from './NumberInput.styled';
import { useState } from 'react'

export type colorSchemeType = 'whiteAlpha' | 'blackAlpha' | 'gray' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'cyan' | 'purple' | 'pink' ;
export interface NumberInputProps {
  size: "xs" | 'sm' | 'md' | 'lg';
  colorScheme: colorSchemeType;
  isInvalid?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  value: number;
  incrementIcon?: React.ReactNode;
  decrementIcon?: React.ReactNode;
}

const setIcon = (incrementIcon: React.ReactNode) => {
  return <figure className="icon">{incrementIcon}</figure>;
};
const NumberInput = ({ size = 'md', colorScheme, value, incrementIcon, decrementIcon, disabled = false, readOnly = false, isInvalid = false }: NumberInputProps) => {
  const [count, setCount] = useState(0)
  return (
    <StyleNumberInput size={size} colorScheme={colorScheme} value={value} disabled={disabled} readOnly={readOnly} isInvalid={isInvalid}>
      <NumberInputField value={count}/>
      <NumberInputStepper>
        <NumberIncrementStepper onClick={() => setCount((count) => count + 1)}>
          {incrementIcon && setIcon(incrementIcon)}
        </NumberIncrementStepper>
        <NumberDecrementStepper onClick={() => setCount((count) => count - 1)}>
          {decrementIcon && setIcon(decrementIcon)}
        </NumberDecrementStepper>
      </NumberInputStepper>
    </StyleNumberInput>
  );
};
export default NumberInput;