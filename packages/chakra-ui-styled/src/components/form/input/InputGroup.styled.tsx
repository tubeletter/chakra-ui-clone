import styled, { css } from 'styled-components';

import { InputGroupType } from './InputGroup';

import { AddonStyle } from './InputAddon';
import { InputStyle } from './Input.styled';

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

export const InputGroupStyle = styled.div<{
  $props: InputGroupType;
}>`
  ${({ theme, $props }) => css`
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;

    & ${InputStyle} {
      flex-grow: 1;
      padding-right: ${$props.rightAddon ? InputStyleSize[$props.$size].padding : 0};
      padding-left: ${$props.leftAddon ? InputStyleSize[$props.$size].padding : InputStyleSize[$props.$size].padding};
      border-radius: 0;

      ${!$props.rightAddon && $props.leftAddon
        ? css`
            ${!$props.leftAddon.props.$bg &&
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
        : !$props.leftAddon && $props.rightAddon
          ? css`
              ${!$props.rightAddon.props.$bg &&
              css`
                &:not(:focus-visible) {
                  border-right-color: transparent;
                }
              `}
              border-top-left-radius: ${InputStyleSize[$props.$size].radii};
              border-bottom-left-radius: ${InputStyleSize[$props.$size].radii};
            `
          : !$props.rightAddon && !$props.leftAddon
            ? css`
                border-radius: ${InputStyleSize[$props.$size].radii};
              `
            : css`
                border-radius: 0;
                ${!$props.rightAddon?.props.$bg &&
                !$props.leftAddon?.props.$bg &&
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
      flex: none;
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
