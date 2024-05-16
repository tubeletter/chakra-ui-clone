import styled, { css } from 'styled-components';
import { SelectProps } from './Select';


const selectFontSize = {
  xs: css`
    height: 24px;
    padding: 0 32px 1px 8px;
    ${({ theme }) => theme.typo.text.xs}
  `,
  sm: css`
    height: 32px;
    padding: 0 32px 1px 12px;
    ${({ theme }) => theme.typo.text.sm}
  `,
  md: css`
    height: 40px;
    padding: 0 32px 1px 16px;
    ${({ theme }) => theme.typo.text.md}
  `,
  lg: css`
    height: 48px;
    padding: 0 32px 1px 16px;
    ${({ theme }) => theme.typo.text.lg}
  `,
};
export const SelectStyle = styled.select<SelectProps>`
  width: 320px;
  border-radius: 6px;
  ${({ size }) => selectFontSize[size]}
  &:focus {
    outline: 0;
  }

  ${({ disabled, readOnly, isInvalid, colorScheme, theme }) => css`
    ${disabled || readOnly
      ? css`
          // 비활성o
          opacity: 0.5;
          border: 1px solid ${theme.color.gray[200]};
        `
      : css`
          // 기본
          border: 1px solid ${theme.color.gray[200]};
          &:focus {
            outline: 1px solid ${theme.color[colorScheme][500]};
          }
          // 기본 + 값이 있을때만 조건 충족 : 아웃라인 들어와야함
          ${isInvalid &&
            css`
              outline: 1px solid ${theme.color[colorScheme][500]};
            `}
        `}
  `}
`;