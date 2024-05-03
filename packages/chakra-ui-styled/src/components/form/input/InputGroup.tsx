import React from 'react';
import styled, { css } from 'styled-components';

type InputGroupSize = 'xs' | 'sm' | 'md' | 'lg';
type VariantType = 'outline' | 'filled' | 'flushed';

export type InputGroupType = {
  size: InputGroupSize;
  variant: VariantType;
  isInvalid?: boolean;
  isDisabled: boolean;
};

// Create context
export const InputGroupContext = React.createContext<InputGroupType>({
  size: 'xs',
  variant: 'filled',
  isInvalid: false,
  isDisabled: false
});

// A util function to use context with simpler syntax
export const useInputGroupContext = () => React.useContext(InputGroupContext);

const InputGroupStyle = styled.div<{ props: InputGroupType }>`
  ${({ props }) => css`
    display: flex;
    align-items: center;
    background-color: ${props.size === 'xs' ? 'red' : 'black'};
  `}
`;

// Root Provider
const InputGroup = ({ children, defaultValue }: { children: React.ReactNode; defaultValue: InputGroupType }) => {
  return (
    <InputGroupContext.Provider value={defaultValue}>
      <InputGroupStyle props={{ ...defaultValue }}>{children}</InputGroupStyle>
    </InputGroupContext.Provider>
  );
};

type InputType = {
  type?: 'text' | 'email' | 'tel';
  name: string;
  id: string;
  placeholder?: string;
};
const InputStyle = styled.input<{ size: InputGroupSize; variant: VariantType }>`
  ${({ size, variant }) => css`
    flex: 1;
    background-color: transparent;
    border: 0 none;
  `}
`;

// input
const Input = ({ type = 'text', name, id, placeholder = 'Placeholder' }: InputType) => {
  const { size, variant } = useInputGroupContext();
  return (
    <>
      <InputStyle type={type} name={name} id={id} size={size} variant={variant} placeholder={placeholder} />
    </>
  );
};

// @@
const LeftAddon = ({ children }: { children: React.ReactNode }) => {
  return <AddonStyle position="left">{children}</AddonStyle>;
};
const RightAddon = ({ children }: { children: React.ReactNode }) => {
  return <AddonStyle position="right">{children}</AddonStyle>;
};
const AddonStyle = styled.div<{ position: string }>`
  ${({ position }) => css`
    background-color: ${position === 'left' ? 'blue' : 'white'};
  `}
`;

InputGroup.input = Input;
InputGroup.leftAddon = LeftAddon;
InputGroup.rightAddon = RightAddon;

export default InputGroup;
