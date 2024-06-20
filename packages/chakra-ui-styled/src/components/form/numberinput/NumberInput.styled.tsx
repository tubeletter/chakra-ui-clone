import styled, { css } from 'styled-components';
import { NumberInputProps } from './NumberInput';

const numberInputSize = {
  xs: css`
    height: 24px;
    border-radius: 2px;
    padding: 0px 0px 0px 12px;
  `,
  sm: css`
    height: 32px;
    border-radius: 2px;
    padding: 0px 0px 0px 12px;
  `,
  md: css`
    height: 40px;
    border-radius: 6px;
    padding: 0px 0px 0px 16px;
  `,
  lg: css`
    height: 48px;
    border-radius: 6px;
    padding: 0px 0px 0px 16px;
  `,
};
const fontSize = {
  xs: css`
    ${({ theme }) => theme.typo.text.xs}
  `,
  sm: css`
    ${({ theme }) => theme.typo.text.sm}
  `,
  md: css`
    ${({ theme }) => theme.typo.text.md}
  `,
  lg: css`
    ${({ theme }) => theme.typo.text.lg}
  `,
};
export const StyleNumberInput = styled.div<NumberInputProps>`
  display: flex;
  align-items: center;
  flex: 1 1 30%;
  ${({ size }) => numberInputSize[size]}
  & input{
    ${({ size }) => fontSize[size]}
  }
  &:focus {
    outline: 0;
  }
  ${({ disabled, readOnly, isInvalid, colorScheme, theme }) => css`
    ${disabled || readOnly
      ? css`
          // 비활성o
          opacity: 0.5;
          border: 1px solid ${theme.color.gray[200]};
          pointer-events: none;
        `
      : css`
          // 기본
          border: 1px solid ${theme.color.gray[200]};
          &:focus-within {
            outline: 1px solid ${theme.color[colorScheme][500]};
          }
          // 기본 + min, max값이 넘었을경우 조건 충족 : 굵은아웃라인 들어와야함
          ${isInvalid &&
            css`
              outline: 3px solid ${theme.color.red[500]};
            `}
        `}
  `}
`;
export const NumberInputField = styled.input.attrs({ type: "text" })`
  flex: 1;
  border: none;
  &:focus{
    outline: 0;
  }
`;
export const NumberInputStepper = styled.div`
  width: 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const IncrementStepperIconStyle = () => {
  return (
    <svg width="currentSize" height="currentSize" viewBox="0 0 24 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.6096 3.48804C11.8097 3.23784 12.1903 3.23784 12.3904 3.48804L15.3501 7.18765C15.612 7.51504 15.3789 8 14.9597 8L9.04031 8C8.62106 8 8.38797 7.51503 8.64988 7.18765L11.6096 3.48804Z" fill="#2D3748"/>
    </svg>
  );
};
export const DecrementStepperIconStyle = () => {
  return (
    <svg width="currentSize" height="currentSize" viewBox="0 0 24 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.3904 7.51196C12.1903 7.76216 11.8097 7.76216 11.6096 7.51196L8.64988 3.81235C8.38797 3.48497 8.62106 3 9.04031 3L14.9597 3C15.3789 3 15.612 3.48497 15.3501 3.81235L12.3904 7.51196Z" fill="#2D3748"/>
    </svg>
  );
};
export const NumberIncrementStepper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 50%;
  cursor: pointer;
  ${({ theme }) => css`
    border-left: 1px solid ${theme.color.gray[200]};
  `}
`;
export const NumberDecrementStepper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 50%;
  cursor: pointer;
  ${({ theme }) => css`
    border-left: 1px solid ${theme.color.gray[200]};
    border-top: 1px solid ${theme.color.gray[200]};
  `}  
`;