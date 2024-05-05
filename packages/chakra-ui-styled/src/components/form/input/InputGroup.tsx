import React from 'react';
import styled, { css } from 'styled-components';

type InputGroupSize = 'xs' | 'sm' | 'md' | 'lg';
type VariantType = 'outline' | 'filled' | 'flushed';

export type InputGroupType = {
  size: InputGroupSize;
  variant: VariantType;
  isInvalid?: boolean;
  isDisabled: boolean;
  leftAddon: boolean;
  rightAddon: boolean;
};

// Create context
export const InputGroupContext = React.createContext<InputGroupType>({
  size: 'xs',
  variant: 'filled',
  isInvalid: false,
  isDisabled: false,
  leftAddon: false,
  rightAddon: false
});

// A util function to use context with simpler syntax
export const useInputGroupContext = () => React.useContext(InputGroupContext);

type inputSizeType = { [key: string]: { height: string; padding: string } };
const InputSize: inputSizeType = {
  xs: {
    height: '24px',
    padding: '8px'
  },
  sm: {
    height: '32px',
    padding: '12px'
  },
  md: {
    height: '40px',
    padding: '12px'
  },
  lg: {
    height: '48px',
    padding: '16px'
  }
};

const InputGroupStyle = styled.div<{ props: InputGroupType }>`
  ${({ props }) => css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    height: ${InputSize[props.size]?.height};
    padding-right:;
    padding-left:;
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
  type?: 'text' | 'email' | 'tel' | 'password';
  name: string;
  id: string;
  placeholder?: string;
};

const InputStyle = styled.input<{ props: InputGroupType }>`
  ${({ theme, props }) => css`
    flex: 1;
    height: ${InputSize[props.size]};
    background-color: transparent;
    border: 0 none;
    ${theme.typo.text[props.size]};
  `}
`;

// input
const Input = ({ type = 'text', name, id, placeholder = 'Placeholder' }: InputType) => {
  const defaultValue = useInputGroupContext();
  return (
    <>
      <InputStyle
        type={type}
        name={name}
        id={id}
        props={{ ...defaultValue }}
        disabled={defaultValue.isDisabled}
        readOnly={defaultValue.isDisabled}
        placeholder={placeholder}
      />
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
