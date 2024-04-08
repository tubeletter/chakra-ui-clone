import styled, { css } from 'styled-components';

export interface CheckboxProps {
  size: 'sm' | 'md' | 'lg';
  colorScheme: 'blue' | 'teal' | 'green' | 'cyan' | 'purple' | 'pink';
  isChecked?: boolean;
  isDisabled?: boolean;
  isIndeterminate?: boolean;
  // Indeterminate는 체크를 했다는 전제조건에서만 나올 수 있음, isDisabled가 true이면 Indeterminate는 자동으로 해제, 우선 배제하고 작업진행
  text: string;
}
const checkboxSize = { sm: 12, md: 16, lg: 20 };
const iconSize = { sm: 8, md: 12, lg: 16 };
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
const CheckboxForm = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  
  &:checked:indeterminate ~ span::after {
    display: flex;
  }
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
      display: flex;
      justify-content: center;
      align-items: center;
    }

    ${({ isChecked, isDisabled, isIndeterminate, colorScheme, theme }) => {
    switch (true) {
      case (isChecked == true):
        if (isDisabled) { // 체크되고 비활성화
          // if (isIndeterminate) { // isIndeterminate 설정되면 isDisabled = false;로 바꾸고 -뜨게하는 법?
          //   isDisabled = false;
          //   return
          // } 
          return css`
              background-color: ${theme.color.gray[200]};
              border: none;
              &::after {
                content: '✔';
                color: ${theme.color.gray[500]};
              }
            `;
        } else { // 체크되고 활성화
          if (isIndeterminate) { // isIndeterminate 설정되면 -아이콘
            return css`
              background-color: ${getColor(colorScheme)};
              border: 1px solid ${getColor(colorScheme)};
              &::after {
                content: '-';
                color: ${theme.color.white.white};
                transform: translate(-50%, -60%);
              }
            `;
          }
          return css`
              background-color: ${getColor(colorScheme)};
              border: 1px solid ${getColor(colorScheme)};
              &::after {
                content: '✔';
                color: ${theme.color.white.white};
              }
            `;
        };
      case (isChecked == false):
        if (isDisabled) {// 체크안되고 비활성화
          return css`
              background-color: ${theme.color.gray[100]};
              border: none;
              &::after {
                content: '';
              }
            `;
        } else { // 체크안되고 활성화
          // if (isIndeterminate) { // isIndeterminate 설정되면 isDisabled = true;로 바꾸고 -뜨게하는 법?
          //   isChecked = true;
          //   return css`
          //     background-color: ${getColor(colorScheme)};
          //     border: 1px solid ${getColor(colorScheme)};
          //     &::after {
          //       content: '-';
          //       color: ${theme.color.white.white};
          //       transform: translate(-50%, -60%);
          //     }
          //   `;
          // }
          return css`
              background-color: none;
              border: 2px solid ${theme.color.gray[200]};
              &::after {
                content: '';
              }
            `;
        }
    }
  }
`;
const Checkbox = ({ size = 'md', isChecked = true, isDisabled = false, isIndeterminate = false, colorScheme, text }: CheckboxProps) => {
  return (
    <Label
      size={size}
      colorScheme={colorScheme}
      isChecked={isChecked}
      isDisabled={isDisabled}
      isIndeterminate={isIndeterminate}
      text=""
    >
      <CheckboxForm />
      <span />
      {text}
    </Label>
  );
};
export default Checkbox;
