import styled, { css } from 'styled-components';
import { InputType } from './Input';
import { InputStyleSize } from './InputGroup.styled';

export const InputStyle = styled.input<InputType>`
  ${({ theme, disabled, readOnly, $size, $variant, $isInvalid }) => css`
    position: relative;
    z-index: 1;
    box-sizing: border-box;
    display: flex;
    flex: 1;
    height: ${InputStyleSize[$size]?.height};
    border-radius: ${InputStyleSize[$size].radii};
    ${theme.typo.text[$size]};
    ${(disabled || readOnly) && { opacity: '0.4', backgroundColor: `${theme.color.gray[100]}` }};

    ${$variant === 'outline' || $variant === 'flushed'
      ? css`
          padding: 0 ${InputStyleSize[$size]?.padding};
          ${$isInvalid && !disabled && !readOnly
            ? css`
                border: 1px solid ${theme.color.red[500]};
                box-shadow: ${theme.color.red[500]} 0 0 0 1px;
              `
            : css`
                border: 1px solid ${$variant === 'outline' ? theme.color.gray[200] : 'transparent'};
              `};

          &:focus-visible {
            ${!$isInvalid &&
            !disabled &&
            !readOnly &&
            css`
              border-color: ${theme.color.blue[500]};
              box-shadow: ${theme.color.blue[500]} 0 0 0 1px;
            `};
          }
        `
      : $variant === 'filled'
        ? css`
            border: 0 none;
            border-radius: 0;

            ${$isInvalid && !disabled && !readOnly
              ? css`
                  border-bottom: 1px solid ${theme.color.red[500]};
                  box-shadow: ${theme.color.red[500]} 0 1px 0 0;
                `
              : css`
                  border-bottom: 1px solid ${theme.color.gray[200]};
                `};
            &:focus-visible {
              ${!$isInvalid &&
              !disabled &&
              !readOnly &&
              css`
                border-bottom: 1px solid ${theme.color.blue[500]};
                box-shadow: ${theme.color.blue[500]} 0 1px 0 0;
              `};
            }
          `
        : null}

    &:focus-visible {
      outline: none;
    }
  `}
`;
