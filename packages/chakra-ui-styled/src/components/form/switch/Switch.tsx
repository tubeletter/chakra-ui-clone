import styled, { css } from 'styled-components';
import { StyleText } from '../../../foundation/typography/Text.styled';

// 가용색상
export type colorSchemeType = 'blue' | 'teal' | 'green' | 'cyan' | 'purple' | 'pink';
export interface SwitchProps {
  size: 'sm' | 'md' | 'lg';
  colorScheme: colorSchemeType;
  defaultChecked?: boolean;
  isDisabled?: boolean;
  text: string;
}
const SwitchSize = { sm: 12, md: 16, lg: 24 };
const SwitchForm = styled.input.attrs({ type: "Radio" })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  width: 0;
  height: 0;
`;
const Label = styled.label<SwitchProps>`
  flex: 1 0 30%;
  display: flex;
  align-items: center;
  gap: 13px;

  & span {
    width: ${({ size }) => SwitchSize[size] * 2 + 2}px;
    height: ${({ size }) => SwitchSize[size] + 4}px;
    padding: 2px;
    border-radius: 9999px;

    &::after {
      content: '';
      display: block;
      width: ${({ size }) => SwitchSize[size]}px;
      height: ${({ size }) => SwitchSize[size]}px;
      border-radius: 100%;
      transition: 0.3s;
      background-color: #fff;
    }

    ${({ defaultChecked, isDisabled, theme, colorScheme }) => css`
      ${isDisabled
      ? css`// 비활성o
        opacity: 40%;
        background-color: ${theme.color.gray[300]};
        ${defaultChecked && css` // 동시 체크o
        &::after {
          transform: translateX(calc(100% - 2px));
        }
        background-color: ${theme.color[colorScheme][500]};
        `}
      `
      : defaultChecked
        ? css` // 비활성x, 동시 체크o
          &::after {
            transform: translateX(calc(100% - 2px));
          }
          background-color: ${theme.color[colorScheme][500]};
        `
        : css` // 비활성x, 동시 체크x
          background-color: ${theme.color.gray[300]};
        `}
    `}
  }
`;
const Switch = ({ size = 'md', defaultChecked = true, isDisabled = false, colorScheme, text }: SwitchProps) => {
  return (
    <Label size={size} colorScheme={colorScheme} defaultChecked={defaultChecked} isDisabled={isDisabled} text="" >
      <SwitchForm />
      <span />
      <StyleText size="md" weight="normal">
        {text}
      </StyleText>
    </Label>
  );
};
export default Switch;