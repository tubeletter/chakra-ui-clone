import styled, { css } from 'styled-components';

export type colorSchemeType = 'blue' | 'teal' | 'green' | 'cyan' | 'purple' | 'pink';
export interface CheckboxProps {
  size: 'sm' | 'md' | 'lg';
  colorScheme: colorSchemeType;
  isChecked?: boolean;
  isDisabled?: boolean;
  isIndeterminate?: boolean;
  text: string;
}
const checkboxSize = { sm: 12, md: 16, lg: 20, };
const iconSize = { sm: 8, md: 12, lg: 16, };
// 기본색상
const getColor = (colorScheme: string) => css`
  ${({ theme }) => {
    switch (colorScheme) {
      case 'blue':
        return theme.color.blue[500];
      case 'teal':
        return theme.color.teal[500];
      case 'green':
        return theme.color.green[500];
      case 'cyan':
        return theme.color.cyan[500];
      case 'purple':
        return theme.color.purple[500];
      case 'pink':
        return theme.color.pink[500];
      case 'gray':
        return theme.color.gray[500];
      default:
        return theme.color.blue[500];
    }
  }}
`;
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
const CheckboxForm = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;
const Label = styled.label<CheckboxProps>`
  flex: 1 0 30%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 0 0 ${({ size }) => getLabelPadding(size)};

  & span {
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    width: ${({ size }) => checkboxSize[size]}px;
    height: ${({ size }) => checkboxSize[size]}px;
    border-radius: 2px;
    text-align: center;

    &::after { 
      position: absolute;
      font-size: ${({ size }) => iconSize[size]}px;
      width: inherit;
      height: inherit;
      top: inherit;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    // label에서 CheckboxProps적용시
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
          background-color: ${getColor(colorScheme)};
          border: 1px solid ${getColor(colorScheme)};
          &::after {
            ${isIndeterminate
            ? css` // 불확실o
              content: '-';
              transform: translate(-50%, -60%);
            `
            : css` // 불확실x
              content: '✔';
            `}
            color: ${theme.color.white.white};
            transform: translate(-50%, -60%);
          }`
        : css` // 비활성x, 동시 체크x
          border: 2px solid ${theme.color.gray[200]};
          background: none;
        `}
    `}
  }
`;
const Checkbox = ({ size = 'md', isChecked = true, isDisabled = false, isIndeterminate = true, colorScheme, text }: CheckboxProps) => {
  return (
    <Label size={size} colorScheme={colorScheme} isChecked={isChecked} isDisabled={isDisabled} isIndeterminate={isIndeterminate} text="" >
      <CheckboxForm />
      <span />
      {text}
    </Label>
  );
};
export default Checkbox;