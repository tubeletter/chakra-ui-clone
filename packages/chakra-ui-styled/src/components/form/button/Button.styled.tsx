import styled, { css } from 'styled-components';
import { ButtonProps } from './Button';

const iconSize = {
  lg: '16px',
  md: '16px',
  sm: '14px',
  xs: '12px'
};

const buttonSize = {
  lg: css`
    height: 48px;
    padding: 0 ${({ theme }) => theme.spacing[6]};
  `,
  md: css`
    height: 40px;
    padding: 0 ${({ theme }) => theme.spacing[4]};
  `,
  sm: css`
    height: 32px;
    padding: 0 ${({ theme }) => theme.spacing[3]};
  `,
  xs: css`
    height: 24px;
    padding: 0 ${({ theme }) => theme.spacing[2]};
  `
};

const buttonColor = {
  blue: {
    enabled: css`
      ${({ theme }) => theme.color.blue[500]}
    `,
    hover: css`
      ${({ theme }) => theme.color.blue[400]}
    `,
    active: css`
      ${({ theme }) => theme.color.blue[600]}
    `
  },
  gray: {
    enabled: css`
      ${({ theme }) => theme.color.gray[100]}
    `,
    hover: css`
      ${({ theme }) => theme.color.gray[50]}
    `,
    active: css`
      ${({ theme }) => theme.color.gray[200]}
    `
  },
  teal: {
    enabled: css`
      ${({ theme }) => theme.color.teal[500]}
    `,
    hover: css`
      ${({ theme }) => theme.color.teal[400]}
    `,
    active: css`
      ${({ theme }) => theme.color.teal[600]}
    `
  },
  red: {
    enabled: css`
      ${({ theme }) => theme.color.red[500]}
    `,
    hover: css`
      ${({ theme }) => theme.color.red[400]}
    `,
    active: css`
      ${({ theme }) => theme.color.red[600]}
    `
  },
  orange: {
    enabled: css`
      ${({ theme }) => theme.color.orange[500]}
    `,
    hover: css`
      ${({ theme }) => theme.color.orange[400]}
    `,
    active: css`
      ${({ theme }) => theme.color.orange[600]}
    `
  },
  yellow: {
    enabled: css`
      ${({ theme }) => theme.color.yellow[400]}
    `,
    hover: css`
      ${({ theme }) => theme.color.yellow[300]}
    `,
    active: css`
      ${({ theme }) => theme.color.yellow[500]}
    `
  },
  pink: {
    enabled: css`
      ${({ theme }) => theme.color.pink[500]}
    `,
    hover: css`
      ${({ theme }) => theme.color.pink[400]}
    `,
    active: css`
      ${({ theme }) => theme.color.pink[600]}
    `
  },
  purple: {
    enabled: css`
      ${({ theme }) => theme.color.purple[500]}
    `,
    hover: css`
      ${({ theme }) => theme.color.purple[400]}
    `,
    active: css`
      ${({ theme }) => theme.color.purple[600]}
    `
  },
  green: {
    enabled: css`
      ${({ theme }) => theme.color.green[500]}
    `,
    hover: css`
      ${({ theme }) => theme.color.green[400]}
    `,
    active: css`
      ${({ theme }) => theme.color.green[600]}
    `
  }
};

export const StyleButton = styled.button<ButtonProps>`
  ${({ theme, variant, colorScheme }) => css`
    display: flex;
    column-gap: ${theme.spacing[2]};
    align-items: center;
    justify-content: center;
    border: 1px solid ${buttonColor[colorScheme].enabled};
    border-radius: ${theme.radii.md}rem;

    ${variant === 'outline'
      ? css`
          color: ${colorScheme === 'gray' ? theme.color.gray[800] : buttonColor[colorScheme].enabled};
          background-color: ${theme.color.white.white};

          &:hover {
            color: ${colorScheme === 'gray' ? theme.color.gray[800] : buttonColor[colorScheme].hover};
            border-color: ${buttonColor[colorScheme].hover};
          }

          &:active {
            color: ${colorScheme === 'gray' ? theme.color.gray[800] : buttonColor[colorScheme].hover};
            border-color: ${buttonColor[colorScheme].active};
          }
        `
      : variant === 'solid'
        ? css`
            color: ${colorScheme === 'gray' || colorScheme === 'yellow'
              ? theme.color.gray[800]
              : theme.color.white.white};
            background-color: ${buttonColor[colorScheme].enabled};

            &:hover {
              background-color: ${buttonColor[colorScheme].hover};
              border-color: ${buttonColor[colorScheme].hover};
            }

            &:active {
              background-color: ${buttonColor[colorScheme].active};
              border-color: ${buttonColor[colorScheme].active};
            }
          `
        : null}
  `}
  & .icon, & .icon svg {
    width: ${({ size }) => iconSize[size]};
    height: ${({ size }) => iconSize[size]};
  }
  ${({ size }) => buttonSize[size]}
`;
