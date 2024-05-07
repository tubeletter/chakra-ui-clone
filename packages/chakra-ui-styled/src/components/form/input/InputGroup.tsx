import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../../styles/ChakraThemeProvider';

export type InputSize = 'xs' | 'sm' | 'md' | 'lg';
export type VariantType = 'outline' | 'filled' | 'flushed';
export type colorType = 'blue' | 'gray' | 'teal' | 'red' | 'orange' | 'yellow' | 'pink' | 'purple' | 'green';

export type InputGroupType = {
  $size: InputSize;
  $variant: VariantType;
  $isInvalid: boolean;
  disabled: boolean;
  readOnly: boolean;
};

export const InputStyleSize = {
  xs: {
    height: '24px',
    padding: '8px',
    iconSize: '12px',
    radii: css`
      ${theme.radii.sm + 'rem'}
    `
  },
  sm: {
    height: '32px',
    padding: '12px',
    iconSize: '14px',
    radii: css`
      ${theme.radii.base + 'rem'}
    `
  },
  md: {
    height: '40px',
    padding: '12px',
    iconSize: '16px',
    radii: css`
      ${theme.radii.md + 'rem'}
    `
  },
  lg: {
    height: '48px',
    padding: '16px',
    iconSize: '18px',
    radii: css`
      ${theme.radii.lg + 'rem'}
    `
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
      /*   padding-right: ${rightAddon ? InputStyleSize[$props.size]?.padding : 0};
      padding-left: ${leftAddon ? InputStyleSize[$props.size]?.padding : InputStyleSize[$props.size]?.padding}; */
    }
    & ${AddonStyle} {
      display: flex;
      align-items: center;
      justify-content: center;

      /*  min-width: ${InputStyleSize[$props.size]?.height};
      height: ${InputStyleSize[$props.size].height};
      ${theme.typo.text[$props.size]};
      padding: 0 ${InputStyleSize[$props.size].padding}; */
    }
    & ${AddonStyle} svg {
      /* width: ${InputStyleSize[$props.size]?.iconSize}; */
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

    /*   height: ${InputStyleSize[$props.size]?.height};
    padding: ${$props.isInvalid ? 0 : InputStyleSize[$props.size]?.padding};
    background-color: transparent;
    border: 0 none;
    ${theme.typo.text[$props.size]};
    border: ${$props.isInvalid ? `1px solid ${theme.color.red[500]}` : `1px solid ${theme.color.gray[200]}`}; */
  `}
`;

// input
export const Input = ({ type = 'text', name, id, placeholder = 'Placeholder' }: InputType) => {
  return (
    <>
      {/*   <InputStyle
        type={type}
        name={name}
        id={id}
        $props={{ ...defaultValue }}
        disabled={defaultValue.isDisabled}
        readOnly={defaultValue.isDisabled}
        placeholder={placeholder}
      /> */}
    </>
  );
};

interface InputAddonType {
  $color?: colorType;
  $bg?: colorType;
  element?: React.ReactNode;
}

// @@
export const InputAddon = ({ $color, $bg, element }: InputAddonType) => {
  const { size } = useInputGroupContext();
  return (
    <AddonStyle $color={$color} $bg={$bg}>
      {element}
    </AddonStyle>
  );
};
export const AddonStyle = styled.div<InputAddonType, { $size: inputSizeType }>`
  ${({ $color, $bg, theme }) => css`
    color: ${$color ? theme.color[$color][500] : '#000'};
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
      <InputGroupStyle $props={{ ...defaultValue }}>
        {leftAddon && leftAddon}
        {children}
        {rightAddon && rightAddon}
      </InputGroupStyle>
  );
};

InputGroup.input = Input;

export default InputGroup;
