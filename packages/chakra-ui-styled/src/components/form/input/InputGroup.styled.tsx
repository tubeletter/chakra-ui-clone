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
      ${({ theme }) => theme.radii.sm + 'rem'}
    `
  },
  sm: {
    height: '32px',
    padding: '12px',
    iconSize: '14px',
    radii: css`
      ${({ theme }) => theme.radii.base + 'rem'}
    `
  },
  md: {
    height: '40px',
    padding: '12px',
    iconSize: '16px',
    radii: css`
      ${({ theme }) => theme.radii.md + 'rem'}
    `
  },
  lg: {
    height: '48px',
    padding: '16px',
    iconSize: '18px',
    radii: css`
      ${({ theme }) => theme.radii.lg + 'rem'}
    `
  }
};

let radiiPosition = 'left';

const getInputRadii = ($props: InputGroupType) => {
  //leftAddon만있을경우
  if (!$props.rightAddon && $props.leftAddon) {
    return css`
      border-top-right-radius: ${InputStyleSize[$props.$size].radii};
      border-bottom-right-radius: ${InputStyleSize[$props.$size].radii};
    `;
  }
  //rightAddon만있을경우
  if (!$props.rightAddon && $props.leftAddon) {
    return css`
      border-top-left-radius: ${InputStyleSize[$props.$size].radii};
      border-bottom-left-radius: ${InputStyleSize[$props.$size].radii};
    `;
  }
  //다 없을경우
  if (!$props.rightAddon && !$props.leftAddon) {
    return css`
      border-radius: ${InputStyleSize[$props.$size].radii};
    `;
  }
  return null;
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
      ${getInputRadii($props)};

      // 왼쪽 요소만있고, 왼쪽요소의 백그라운드가 투명일때
      ${!$props.rightAddon &&
      $props.leftAddon &&
      !$props.leftAddon.props.$bg &&
      css`
        &:not(:focus-visible),
        &::placeholder {
          padding-left: 0;
          border-left-color: transparent;
        }
      `}
      // 오른쪽 요소만있고, 오른쪽요소의 백그라운드가 투명일때
      ${!$props.leftAddon &&
      $props.rightAddon &&
      !$props.rightAddon.props.$bg &&
      css`
        &:not(:focus-visible) {
          border-right-color: transparent;
        }
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

      ${$props.rightAddon?.props.dataPosition}
    }
    & ${AddonStyle} svg {
      width: ${InputStyleSize[$props.$size].iconSize};
    }
  `}
`;
