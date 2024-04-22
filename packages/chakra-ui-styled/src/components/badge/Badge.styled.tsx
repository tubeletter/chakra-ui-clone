import styled, { css } from 'styled-components';
import { BadgeProps } from './Badge';

export const StyleBadge = styled.div<BadgeProps>`
  ${({ theme, variant, colorScheme }) => css`
    display: inline-flex;
    align-items: center;
    align-self: flex-start;
    justify-content: center;
    justify-self: flex-start;
    width: auto;
    height: 16px;
    padding: 0 ${theme.spacing[1]};
    border-radius: ${theme.radii.sm}rem;
    ${variant === 'solid'
      ? css`
          color: ${theme.color.white.white};
          background-color: ${theme.color[colorScheme][500]};
          border: 1px solid ${theme.color[colorScheme][500]};
        `
      : variant === 'subtle'
        ? css`
            color: ${theme.color[colorScheme][800]};
            background-color: ${theme.color[colorScheme][100]};
            border: 1px solid ${theme.color[colorScheme][100]};
          `
        : variant === 'outline'
          ? css`
              color: ${theme.color[colorScheme][600]};
              background-color: transparent;
              border: 1px solid ${theme.color[colorScheme][500]};
            `
          : null}
  `}
`;
