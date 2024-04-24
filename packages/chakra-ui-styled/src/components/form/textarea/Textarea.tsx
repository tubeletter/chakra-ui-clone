import styled, { css } from 'styled-components';

export interface TextareaProps {
  isInvalid?: boolean;
  isDisabled?: boolean;
  placeholder: string;
}
const TextareaStyle = styled.textarea<TextareaProps>`
  width: 320px;
  height: 80px;
  border-radius: 6px;
  padding: 8px 12px;
  &:focus { 
    outline: 1px solid ${({ theme }) => theme.color.red[500]};
  }
  
  ${({ isDisabled, isInvalid, theme }) => css`
  ${isDisabled
      ? css`// 비활성o
      opacity: 0.4;
      border: 1px solid ${theme.color.gray[200]};
      `
      : isInvalid
        ? css` // 활성o
        border: 1px solid ${theme.color.red[500]};
      `
        : css` // 기본
        border: 1px solid ${theme.color.gray[200]};
      `}
    `}
`;
const Textarea = ({ placeholder = 'Hello', isDisabled = false, isInvalid = false }: TextareaProps) => {
  return (
    <TextareaStyle placeholder={placeholder} isDisabled={isDisabled} isInvalid={isInvalid} />
  );
};
export default Textarea;
