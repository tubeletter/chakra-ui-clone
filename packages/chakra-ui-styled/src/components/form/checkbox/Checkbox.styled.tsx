import styled, { css } from 'styled-components';
import { CheckboxProps } from './Checkbox';

const checkboxSize = { sm: 12, md: 16, lg: 20, };
const iconSize = { sm: 8, md: 12, lg: 16, };
export const CheckboxForm = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  width: 0;
  height: 0;
`;
export const Label = styled.label<CheckboxProps>`
  flex: 1 1 30%;
  display: flex;
  align-items: center;
  gap: 8px;
  
  & span {
    width: ${({ size }) => checkboxSize[size]}px;
    height: ${({ size }) => checkboxSize[size]}px;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;

    &::after { 
      font-size: ${({ size }) => iconSize[size]}px;
      line-height: 1;
    }
    ${({ isChecked, isDisabled, isIndeterminate, colorScheme, theme }) => css`
      ${isDisabled // 비활성화 기준으로 잡아 잉여코드 제거
      ? css` // only 비활성o
          background-color: ${theme.color.gray[200]};
          border: none;
          ${isChecked && css` // 동시 체크o
            &::after {
              content: '✔';
              color: ${theme.color.gray[500]};
            }
          `}
        `
      : isChecked
        ? css` // 비활성x, 동시 체크o
          background-color: ${theme.color[colorScheme][500]};
          border: 1px solid ${theme.color[colorScheme][500]};
          &::after {
            ${isIndeterminate
            ? css` // 불확실o
              content: '-';
              transform: translateY(-10%);
            `
            : css` // 불확실x
              content: '✔';
            `}
            color: ${theme.color.white.white};
          }`
        : css` // 비활성x, 동시 체크x
          border: 2px solid ${theme.color.gray[200]};
          background: none;
        `}
    `}
  }
`;