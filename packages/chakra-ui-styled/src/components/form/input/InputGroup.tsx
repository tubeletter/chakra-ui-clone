import React from 'react';
import styled, { css } from 'styled-components';

type InputGroupSize = 'xs' | 'sm' | 'md' | 'lg';
type VariantType = 'outline' | 'filled' | 'flushed';
type colorType = 'blue' | 'gray' | 'teal' | 'red' | 'orange' | 'yellow' | 'pink' | 'purple' | 'green';

export type InputGroupType = {
  size: InputGroupSize;
  variant: VariantType;
  isInvalid: boolean;
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

type inputstyletype = 'height' | 'padding' | 'iconSize';
type inputSizeType = {
  [key in InputGroupSize]: { [key in inputstyletype]: string };
};
const InputSize: inputSizeType = {
  xs: {
    height: '24px',
    padding: '8px',
    iconSize: '12px'
  },
  sm: {
    height: '32px',
    padding: '12px',
    iconSize: '14px'
  },
  md: {
    height: '40px',
    padding: '12px',
    iconSize: '16px'
  },
  lg: {
    height: '48px',
    padding: '16px',
    iconSize: '18px'
  }
};

const InputGroupStyle = styled.div<{
  $props: InputGroupType;
  rightAddon?: React.ReactNode;
  leftAddon?: React.ReactNode;
}>`
  ${({ $props, rightAddon, leftAddon, theme }) => css`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    isolation: isolate;
    border-radius: 5px;

    & ${InputStyle} {
      padding-right: ${rightAddon ? InputSize[$props.size]?.padding : 0};
      padding-left: ${leftAddon ? InputSize[$props.size]?.padding : InputSize[$props.size]?.padding};
    }
    & ${AddonStyle} {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: ${InputSize[$props.size]?.height};
      height: ${InputSize[$props.size].height};
      ${theme.typo.text[$props.size]};
      padding: 0 ${InputSize[$props.size].padding};
    }
    & ${AddonStyle} svg {
      width: ${InputSize[$props.size]?.iconSize};
    }
  `}
`;

type InputType = {
  type?: 'text' | 'email' | 'tel' | 'password';
  name: string;
  id: string;
  placeholder?: string;
};

const InputStyle = styled.input<{ $props: InputGroupType }>`
  ${({ theme, $props }) => css`
    box-sizing: border-box;
    flex: 1;
    height: ${InputSize[$props.size]?.height};
    background-color: transparent;
    border: 0 none;
    ${theme.typo.text[$props.size]};
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
        $props={{ ...defaultValue }}
        disabled={defaultValue.isDisabled}
        readOnly={defaultValue.isDisabled}
        placeholder={placeholder}
      />
    </>
  );
};

interface InputAddonType {
  $color?: colorType;
  $bg?: colorType;
  element?: React.ReactNode;
}

// @@
export const InputAddon = ({ $color, $bg, element }: InputAddonType, $size: InputGroupSize) => {
  const { size } = useInputGroupContext();
  return (
    <AddonStyle $color={$color} $bg={$bg}>
      {element}
    </AddonStyle>
  );
};
export const AddonStyle = styled.div<InputAddonType, { $size: inputSizeType }>`
  ${({ $color, $bg, theme }) => css`
    color: ${$color};
    background-color: ${$bg ? theme.color[$bg][100] : 'transparent'};
  `}
`;

// Root Provider
const InputGroup = ({
  children,
  defaultValue,
  leftAddon,
  rightAddon
}: {
  children: React.ReactNode;
  defaultValue: InputGroupType;
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
}) => {
  return (
    <InputGroupContext.Provider value={defaultValue}>
      <InputGroupStyle $props={{ ...defaultValue }}>
        {leftAddon && leftAddon}
        {children}
        {rightAddon && rightAddon}
      </InputGroupStyle>
    </InputGroupContext.Provider>
  );
};

InputGroup.input = Input;

export default InputGroup;
