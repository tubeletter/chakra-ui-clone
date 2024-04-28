import styled, { css } from 'styled-components';
import { TagProps } from './Tag';
import { StyleText } from '../../foundation/typography/Text.styled';

const tagSize = {
  lg: css`
    gap: 8px;
    height: 32px;
    padding: 0 ${({ theme }) => theme.spacing[3]};
  `,
  md: css`
    gap: 6px;
    height: 24px;
    padding: 0 ${({ theme }) => theme.spacing[2]};
  `,
  sm: css`
    gap: 6px;
    height: 20px;
    padding: 0 ${({ theme }) => theme.spacing[2]};
  `
};
const tagText = {
  lg: css`
    ${({ theme }) => theme.typo.text.md};
    font-weight: ${({ theme }) => theme.typo.fontWeight.medium};
    line-height: 1.5;
  `,
  md: css`
    ${({ theme }) => theme.typo.text.sm};
    font-weight: ${({ theme }) => theme.typo.fontWeight.medium};
    line-height: 1.3;
  `,
  sm: css`
    ${({ theme }) => theme.typo.text.xs};
    font-weight: ${({ theme }) => theme.typo.fontWeight.medium};
  `
};

export const TagStyle = styled.div<TagProps>`
  ${({ theme, variant, colorScheme }) => css`
    display: inline-flex;
    align-items: center;
    align-self: flex-start;
    justify-content: center;
    justify-self: flex-start;
    width: auto;
    border-radius: ${theme.radii.md}rem;
    ${variant === 'solid'
      ? css`
          color: ${theme.color.white.white};
          background-color: ${theme.color[colorScheme][500]};
          border: 1px solid ${theme.color[colorScheme][500]};
        `
      : variant === 'subtle'
        ? css`
            color: ${theme.color[colorScheme][800]};
            background-color: ${theme.color[colorScheme][200]};
            border: 1px solid ${theme.color[colorScheme][200]};
          `
        : variant === 'outline'
          ? css`
              color: ${theme.color[colorScheme][600]};
              background-color: transparent;
              border: 1px solid ${theme.color[colorScheme][500]};
            `
          : null}
  `}
  & .tag-remove-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    color: inherit;
    background: transparent;
    border: 0 none;
    outline: none;
  }

  & ${StyleText} {
    ${({ size }) => tagText[size]}
  }

  ${({ size }) => tagSize[size]}
`;
