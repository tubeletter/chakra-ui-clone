import React from 'react';

import styled, { css } from 'styled-components';
import { theme } from '../../../styles/ChakraThemeProvider';
import Input, { InputType, InputStyle } from './Input';

export type InputSize = 'xs' | 'sm' | 'md' | 'lg';
export type VariantType = 'outline' | 'filled' | 'flushed';
export type colorType = 'blue' | 'gray' | 'teal' | 'red' | 'orange' | 'yellow' | 'pink' | 'purple' | 'green';

export type CommonInputType = {
  $size: InputSize;
  $variant?: VariantType;
  $isInvalid: boolean;
  disabled: boolean;
  readOnly: boolean;
};

export type InputGroupType = CommonInputType &
  InputType & {
    leftAddon?: React.ReactNode;
    rightAddon?: React.ReactNode;
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
  $props: CommonInputType;
  rightAddon?: boolean;
  leftAddon?: boolean;
}>`
  ${({ theme, $props, rightAddon, leftAddon }) => css`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;

    & ${InputStyle} {
      padding-right: ${rightAddon ? InputStyleSize[$props.$size].padding : 0};
      padding-left: ${leftAddon ? InputStyleSize[$props.$size].padding : InputStyleSize[$props.$size].padding};
      ${!rightAddon && leftAddon
        ? css`
            border-top-right-radius: ${InputStyleSize[$props.$size].radii};
            border-bottom-right-radius: ${InputStyleSize[$props.$size].radii};
          `
        : !leftAddon && rightAddon
          ? css`
              border-top-left-radius: ${InputStyleSize[$props.$size].radii};
              border-bottom-left-radius: ${InputStyleSize[$props.$size].radii};
            `
          : !rightAddon && !leftAddon
            ? css`
                border-radius: ${InputStyleSize[$props.$size].radii};
              `
            : 'border-radius: 0px'}
    }
    & ${AddonStyle} {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: ${InputStyleSize[$props.$size].height};
      height: ${InputStyleSize[$props.$size].height};
      ${theme.typo.text[$props.$size]};
      padding: 0 ${InputStyleSize[$props.$size].padding};
      border: 1px solid ${theme.color.gray[200]};

      &[dataPosition='left'] {
        border-right: 0 none;
        border-top-left-radius: ${InputStyleSize[$props.$size].radii};
        border-bottom-left-radius: ${InputStyleSize[$props.$size].radii};
      }

      &[dataPosition='right'] {
        border-left: 0 none;
        border-top-right-radius: ${InputStyleSize[$props.$size].radii};
        border-bottom-right-radius: ${InputStyleSize[$props.$size].radii};
      }
    }
    & ${AddonStyle} svg {
      width: ${InputStyleSize[$props.$size].iconSize};
    }
  `}
`;

// Root Provider
const InputGroup = ({
  $size,
  disabled,
  readOnly,
  $isInvalid,
  leftAddon,
  rightAddon,
  type = 'text',
  id,
  name,
  placeholder = 'placeholder'
}: InputGroupType) => {
  return (
    <InputGroupStyle
      $props={{ $size, disabled, readOnly, $isInvalid }}
      leftAddon={leftAddon ? true : false}
      rightAddon={rightAddon ? true : false}
    >
      {leftAddon && <InputAddon dataPosition="left" $color="gray" $bg="gray" element={leftAddon} />}
      <Input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        $size={$size}
        $variant={'outline'}
        $isInvalid={$isInvalid}
      />
      {rightAddon && <InputAddon dataPosition="right" $color="gray" $bg="gray" element={rightAddon} />}
    </InputGroupStyle>
  );
};

interface InputAddonType {
  $color?: colorType;
  $bg?: colorType;
  dataPosition: 'left' | 'right';
  element?: React.ReactNode;
}

// @@
export const InputAddon = ({ $color, $bg, dataPosition, element }: InputAddonType) => {
  return (
    <AddonStyle dataPosition={dataPosition} $color={$color} $bg={$bg}>
      {element}
    </AddonStyle>
  );
};
export const AddonStyle = styled.div<InputAddonType>`
  ${({ $color, $bg, theme }) => css`
    color: ${$color ? theme.color[$color][500] : '#000'};
    background-color: ${$bg ? theme.color[$bg][100] : 'transparent'};
  `}
`;

export default InputGroup;
