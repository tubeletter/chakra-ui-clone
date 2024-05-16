import styled, { css } from 'styled-components';
import { PinInputProps } from './PinInput';

const PinInputSize = {
  xs: css`
    width: ${({ theme }) => theme.spacing[6]};
    border-radius: 2px;
    ${({ theme }) => theme.typo.text.xs};
  `,
  sm: css`
    width: ${({ theme }) => theme.spacing[8]};
    border-radius: 4px;
    ${({ theme }) => theme.typo.text.sm}
  `,
  md: css`
    width: ${({ theme }) => theme.spacing[10]};
    border-radius: 4px;
    ${({ theme }) => theme.typo.text.md}
  `,
  lg: css`
    width: ${({ theme }) => theme.spacing[12]};
    border-radius: 6px;
    ${({ theme }) => theme.typo.text.lg}
  `,
};
export const StylePinInput = styled.div.attrs({ autoFocus: true })<PinInputProps>`
  display: flex;
  gap: 6px;
  & input{
    ${({ size }) => PinInputSize[size]}
    ${({ colorScheme, theme }) => css`
      border: 1px solid ${theme.color.gray[200]};
      &:focus {
        outline: 2px solid ${theme.color[colorScheme][500]};
      }
      &:placeholder-shown {
        color: ${theme.color.gray[400]};
      }
    `}
  }
`;

export const PinInputField = styled.input.attrs({ type: "text",  maxlength: 1, placeholder: "○" })`
  text-align: center;
  aspect-ratio: 1;
  &:focus {
      outline: 0;
  }
  
 `;