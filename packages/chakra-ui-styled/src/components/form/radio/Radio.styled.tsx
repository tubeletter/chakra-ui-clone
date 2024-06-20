import styled, { css } from 'styled-components';
import { RadioProps } from './Radio';


const RadioSize = { sm: 12, md: 16, lg: 20, };
const borderSize = { sm: 4, md: 5, lg: 6 };
export const RadioForm = styled.input.attrs({ type: "Radio" })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  width: 0;
  height: 0;
`;
export const Label = styled.label<RadioProps>`
  flex: 1 1 30%;
  display: flex;
  align-items: center;
  gap: 8px;

  & span {
    width: ${({ size }) => RadioSize[size]}px;
    height: ${({ size }) => RadioSize[size]}px;
    border-radius: 50%;

    ${({ size, defaultChecked, isDisabled, colorScheme, theme }) => css`
      ${isDisabled
      ? css`// 비활성o
        background-color: ${theme.color.gray[200]};
        border: 2px solid ${theme.color.gray[200]};
        ${defaultChecked && css` // 동시 체크o
        border: ${borderSize[size]}px solid ${theme.color.gray[200]};
        background-color: ${theme.color.gray[500]};
        `}
      `
      : defaultChecked
        ? css` // 비활성x, 동시 체크o
          border: ${borderSize[size]}px solid ${theme.color[colorScheme][500]};
          background-color: ${theme.color.white.white};
        `
        : css` // 비활성x, 동시 체크x
          border: 2px solid ${theme.color.gray[200]};
          background: none;
        `}
    `}
  }
`;