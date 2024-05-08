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
    leftAddon?: React.ReactElement;
    rightAddon?: React.ReactElement;
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
  rightAddon?: React.ReactElement;
  leftAddon?: React.ReactElement;
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
      border-radius: 0;

      ${!rightAddon && leftAddon
        ? css`
            ${!leftAddon.props.$bg &&
            css`
              &:not(:focus-visible) {
                border-left-color: transparent;
              }

              padding-left: 0;
            `}
            /* border-left-color: transparent; */
            border-top-right-radius: ${InputStyleSize[$props.$size].radii};
            border-bottom-right-radius: ${InputStyleSize[$props.$size].radii};
          `
        : !leftAddon && rightAddon
          ? css`
              ${!rightAddon.props.$bg &&
              css`
                &:not(:focus-visible) {
                  border-right-color: transparent;
                }
              `}
              border-top-left-radius: ${InputStyleSize[$props.$size].radii};
              border-bottom-left-radius: ${InputStyleSize[$props.$size].radii};
            `
          : !rightAddon && !leftAddon
            ? css`
                border-radius: ${InputStyleSize[$props.$size].radii};
              `
            : css`
                border-radius: 0;
                ${!rightAddon?.props.$bg &&
                !leftAddon?.props.$bg &&
                css`
                  &:not(:focus-visible) {
                    border-right-color: transparent;
                    border-left-color: transparent;
                  }

                  padding-left: 0;
                `}
              `}
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
export const InputGroup = ({
  $size,
  $isInvalid,
  disabled,
  readOnly,
  type = 'text',
  id,
  name,
  placeholder = 'placeholder',
  leftAddon,
  rightAddon
}: InputGroupType) => {
  return (
    <InputGroupStyle $props={{ $size, disabled, readOnly, $isInvalid }} leftAddon={leftAddon} rightAddon={rightAddon}>
      {leftAddon && leftAddon}
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
      {rightAddon && rightAddon}
    </InputGroupStyle>
  );
};

type InputAddonType = {
  $color?: colorType;
  $bg?: colorType;
  dataPosition?: 'left' | 'right';
  $element: React.ReactNode;
};

// @@
const InputAddon = ({ $color, $bg, dataPosition, $element }: InputAddonType) => {
  return (
    <AddonStyle dataPosition={dataPosition} $color={$color} $bg={$bg} $element={$element}>
      {$element}
    </AddonStyle>
  );
};
const AddonStyle = styled.figure<InputAddonType>`
  ${({ $color, $bg, theme }) => css`
    color: ${$color ? theme.color[$color][500] : theme.color.black.black};
    background-color: ${$bg ? theme.color[$bg][100] : 'transparent'};
  `}
`;
InputGroup.leftAddon = InputAddon;
InputGroup.rightAddon = InputAddon;

export default InputGroup;
