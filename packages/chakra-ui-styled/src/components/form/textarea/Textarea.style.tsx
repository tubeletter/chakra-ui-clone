import styled, { css } from 'styled-components';
import { TextareaProps } from './Textarea';

export const TextareaStyle = styled.textarea<TextareaProps>`
  width: 320px;
  height: 80px;
  border-radius: 6px;
  padding: 8px 12px;
  &:focus {
    outline: 0;
  }

  ${({ disabled, readOnly, isInvalid, theme }) => css`
    ${disabled || readOnly
      ? css`
          // 비활성o
          opacity: 0.4;
          border: 1px solid ${theme.color.gray[200]};
        `
      : css`
          // 기본
          border: 1px solid ${theme.color.gray[200]};
          &:focus {
            outline: 1px solid ${theme.color.red[500]};
          }
          // 기본 + 값이 있을때만 조건 충족 : 아웃라인 들어와야함
          ${isInvalid &&
          css`
            outline: 1px solid ${theme.color.red[500]};
          `}
        `}
  `}
`;