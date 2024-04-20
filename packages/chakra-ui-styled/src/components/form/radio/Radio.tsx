import styled, { css } from 'styled-components';
import { StyleText } from '../../../foundation/typography/Text.styled';

// 가용색상
export type colorSchemeType = 'blue' | 'teal' | 'green' | 'cyan' | 'purple' | 'pink';
export interface RadioProps {
  size: 'sm' | 'md' | 'lg';
  colorScheme: colorSchemeType;
  defaultChecked?: boolean;
  isDisabled?: boolean;
  text: string;
}
const RadioSize = { sm: 12, md: 16, lg: 20, };
const borderSize = { sm: 4, md: 5, lg: 6 };
// label 사이즈 설정 했을 때 label의 왼쪽여백 조정
const getLabelPadding = (size: string) => css`
  ${({ theme }) => {
    switch (size) {
      case 'sm':
        return theme.spacing[5];
      case 'md':
        return theme.spacing[6];
      case 'lg':
        return theme.spacing[7];
      default:
        return theme.spacing[6];
    }
  }}
`;
const RadioForm = styled.input.attrs({ type: "Radio" })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  width: 0;
  height: 0;
`;
const Label = styled.label<RadioProps>`
  flex: 1 1 30%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 0 0 ${({ size }) => getLabelPadding(size)};

  & span {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
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
const Radio = ({ size = 'md', defaultChecked = true, isDisabled = false, colorScheme, text }: RadioProps) => {
  return (
    <Label size={size} colorScheme={colorScheme} defaultChecked={defaultChecked} isDisabled={isDisabled} text="" >
      <RadioForm />
      <span />
      <StyleText size="sm" weight="normal">
        {text}
      </StyleText>
    </Label>
  );
};
export default Radio;