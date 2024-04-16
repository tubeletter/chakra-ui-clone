import styled, { css } from 'styled-components';
import { ButtonProps } from './Button';

const iconSize = {
  lg: '16px',
  md: '16px',
  sm: '14px',
  xs: '12px'
};
const getButtonSize = (size: string) => css`
  ${({ theme }) => {
    switch (size) {
      case 'lg':
        return css`
          height: 48px;
          padding: 0 ${theme.spacing[6]};
        `;
      case 'md':
        return css`
          height: 40px;
          padding: 0 ${theme.spacing[4]};
        `;
      case 'sm':
        return css`
          height: 32px;
          padding: 0 ${theme.spacing[3]};
        `;
      case 'xs':
        return css`
          height: 24px;
          padding: 0 ${theme.spacing[2]};
        `;
    }
  }}
`;
const getColor = (colorScheme: string) => {
  // css`${({ theme }) => {
  switch (colorScheme) {
    case 'blue':
      return {
        enabled: css`
          ${({ theme }) => theme.color.blue[500]}
        `,
        hover: css`
          ${({ theme }) => theme.color.blue[400]}
        `,
        active: css`
          ${({ theme }) => theme.color.blue[600]}
        `
      };
    case 'gray':
      return {
        enabled: css`
          ${({ theme }) => theme.color.gray[100]}
        `,
        hover: css`
          ${({ theme }) => theme.color.gray[50]}
        `,
        active: css`
          ${({ theme }) => theme.color.gray[200]}
        `
      };
    case 'teal':
      return {
        enabled: css`
          ${({ theme }) => theme.color.teal[500]}
        `,
        hover: css`
          ${({ theme }) => theme.color.teal[400]}
        `,
        active: css`
          ${({ theme }) => theme.color.teal[600]}
        `
      };
    case 'red':
      return {
        enabled: css`
          ${({ theme }) => theme.color.red[500]}
        `,
        hover: css`
          ${({ theme }) => theme.color.red[400]}
        `,
        active: css`
          ${({ theme }) => theme.color.red[600]}
        `
      };
    case 'orange':
      return {
        enabled: css`
          ${({ theme }) => theme.color.orange[500]}
        `,
        hover: css`
          ${({ theme }) => theme.color.orange[400]}
        `,
        active: css`
          ${({ theme }) => theme.color.orange[600]}
        `
      };
    case 'yellow':
      return {
        enabled: css`
          ${({ theme }) => theme.color.yellow[400]}
        `,
        hover: css`
          ${({ theme }) => theme.color.yellow[300]}
        `,
        active: css`
          ${({ theme }) => theme.color.yellow[500]}
        `
      };
    case 'pink':
      return {
        enabled: css`
          ${({ theme }) => theme.color.pink[500]}
        `,
        hover: css`
          ${({ theme }) => theme.color.pink[400]}
        `,
        active: css`
          ${({ theme }) => theme.color.pink[600]}
        `
      };
    case 'purple':
      return {
        enabled: css`
          ${({ theme }) => theme.color.purple[500]}
        `,
        hover: css`
          ${({ theme }) => theme.color.purple[400]}
        `,
        active: css`
          ${({ theme }) => theme.color.purple[600]}
        `
      };
    case 'green':
      return {
        enabled: css`
          ${({ theme }) => theme.color.green[500]}
        `,
        hover: css`
          ${({ theme }) => theme.color.green[400]}
        `,
        active: css`
          ${({ theme }) => theme.color.green[600]}
        `
      };
    default:
      return {
        enabled: css`
          ${({ theme }) => theme.color.blue[500]}
        `,
        hover: css`
          ${({ theme }) => theme.color.blue[400]}
        `,
        active: css`
          ${({ theme }) => theme.color.blue[600]}
        `
      };
  }
};

export const StyleButton = styled.button<ButtonProps>`
  ${({ theme, variant, colorScheme }) => css`
    display: flex;
    column-gap: ${theme.spacing[2]};
    align-items: center;
    justify-content: center;
    border: 1px solid ${getColor(colorScheme).enabled};
    border-radius: ${theme.radii.md}rem;

    ${variant === 'outline'
      ? css`
          color: ${colorScheme === 'gray' ? theme.color.gray[800] : getColor(colorScheme).enabled};
          background-color: ${theme.color.white.white};

          &:hover {
            color: ${colorScheme === 'gray' ? theme.color.gray[800] : getColor(colorScheme).hover};
            border-color: ${getColor(colorScheme).hover};
          }

          &:active {
            color: ${colorScheme === 'gray' ? theme.color.gray[800] : getColor(colorScheme).hover};
            border-color: ${getColor(colorScheme).active};
          }
        `
      : variant === 'solid'
        ? css`
            color: ${colorScheme === 'gray' || colorScheme === 'yellow'
              ? theme.color.gray[800]
              : theme.color.white.white};
            background-color: ${getColor(colorScheme).enabled};

            &:hover {
              background-color: ${getColor(colorScheme).hover};
              border-color: ${getColor(colorScheme).hover};
            }

            &:active {
              background-color: ${getColor(colorScheme).active};
              border-color: ${getColor(colorScheme).active};
            }
          `
        : null}
  `}
  & .icon, & .icon svg {
    width: ${({ size }) => iconSize[size]};
    height: ${({ size }) => iconSize[size]};
  }
  ${({ size }) => getButtonSize(size)}
`;
