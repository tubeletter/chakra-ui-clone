import styled, { css } from 'styled-components';
import { InputStyleSize } from './InputGroup.styled';
import { CommonInputType } from './InputGroup';

const getInputVariant = ($props: CommonInputType) => {
  if ($props.$variant === 'outline' || $props.$variant === 'flushed') {
    return css`
      padding: 0 ${InputStyleSize[$props.$size]?.padding};
      ${$props.$isInvalid && !$props.disabled && !$props.readOnly
        ? css`
            border: 1px solid ${({ theme }) => theme.color.red[500]};
            box-shadow: ${({ theme }) => theme.color.red[500]} 0 0 0 1px;
          `
        : css`
            border: 1px solid ${$props.$variant === 'outline' ? ({ theme }) => theme.color.gray[200] : 'transparent'};
          `};

      &:focus-visible {
        ${!$props.$isInvalid &&
        !$props.disabled &&
        !$props.readOnly &&
        css`
          border-color: ${({ theme }) => theme.color.blue[500]};
          box-shadow: ${({ theme }) => theme.color.blue[500]} 0 0 0 1px;
        `};
      }
    `;
  }
  if ($props.$variant === 'filled') {
    return css`
      border: 0 none;
      border-radius: 0;

      ${$props.$isInvalid && !$props.disabled && !$props.readOnly
        ? css`
            border-bottom: 1px solid ${({ theme }) => theme.color.red[500]};
            box-shadow: ${({ theme }) => theme.color.red[500]} 0 1px 0 0;
          `
        : css`
            border-bottom: 1px solid ${({ theme }) => theme.color.gray[200]};
          `};
      &:focus-visible {
        ${!$props.$isInvalid &&
        !$props.disabled &&
        !$props.readOnly &&
        css`
          border-bottom: 1px solid ${({ theme }) => theme.color.blue[500]};
          box-shadow: ${({ theme }) => theme.color.blue[500]} 0 1px 0 0;
        `};
      }
    `;
  }
  return null;
};

export const InputStyle = styled.input<{ $props: CommonInputType }>`
  ${({ theme, $props }) => css`
    position: relative;
    z-index: 1;
    box-sizing: border-box;
    display: flex;
    flex: 1;
    height: ${InputStyleSize[$props.$size]?.height};
    border-radius: ${InputStyleSize[$props.$size].radii};
    ${theme.typo.text[$props.$size]};
    ${($props.disabled || $props.readOnly) && { opacity: '0.4', backgroundColor: `${theme.color.gray[100]}` }};
    ${getInputVariant($props)}

    &:focus-visible {
      outline: none;
    }
  `}
`;
