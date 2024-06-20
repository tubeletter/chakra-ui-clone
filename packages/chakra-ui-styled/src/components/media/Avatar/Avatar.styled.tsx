import styled, { css } from 'styled-components';
import { AvatarStyleProps } from './Avatar';
import { StyleText } from '../../../foundation/typography/Text.styled';

const AvatarSize = {
  '2xl': {
    size: '128px',
    typo: '48px',
    badge: css`
      width: 40px;
      height: 40px;
      border-style: solid;
      border-width: 8px;
      border-radius: ${({ theme }) => theme.radii.full};
    `
  },
  xl: {
    size: '96px',
    typo: '38px',
    badge: css`
      width: 24px;
      height: 24px;
      border-style: solid;
      border-width: 5px;
      border-radius: ${({ theme }) => theme.radii.full};
    `
  },
  lg: {
    size: '64px',
    typo: '24px',
    badge: css`
      width: 16px;
      height: 16px;
      border-style: solid;
      border-width: 3px;
      border-radius: ${({ theme }) => theme.radii.full};
    `
  },
  md: {
    size: '48px',
    typo: '20px',
    badge: css`
      width: 16px;
      height: 16px;
      border-style: solid;
      border-width: 3px;
      border-radius: ${({ theme }) => theme.radii.full};
    `
  },
  sm: {
    size: '32px',
    typo: '12px',
    badge: css`
      width: 8px;
      height: 8px;
      border-style: solid;
      border-width: 2px;
      border-radius: ${({ theme }) => theme.radii.full};
    `
  },
  xs: {
    size: '24px',
    typo: '10px',
    badge: css`
      width: 6px;
      height: 6px;
      border-style: solid;
      border-width: 1px;
      border-radius: ${({ theme }) => theme.radii.full};
    `
  }
};
const AvatarText = {
  lg: css`
    ${({ theme }) => theme.typo.text.md};
    font-weight: ${({ theme }) => theme.typo.fontWeight.medium};
    line-height: 1.5;
  `,
  md: css`
    ${({ theme }) => theme.typo.text.sm};
    font-weight: ${({ theme }) => theme.typo.fontWeight.medium};
    line-height: 1.3;
  `,
  sm: css`
    ${({ theme }) => theme.typo.text.xs};
    font-weight: ${({ theme }) => theme.typo.fontWeight.medium};
  `
};

export const AvatarStyle = styled.div<{ $props: AvatarStyleProps }>`
  ${({ theme, $props }) => css`
    position: relative;
    display: inline-flex;
    flex: none;
    align-items: center;
    justify-content: center;
    width: ${AvatarSize[$props.size].size};
    height: ${AvatarSize[$props.size].size};
    border-radius: ${theme.radii.full}rem;
    & ${StyleText} {
      ${AvatarSize[$props.size].typo}
    }

    /* img */
    ${$props.img &&
    css`
      & img {
        background-color: ${theme.color.gray[100]};
        border-radius: inherit;
      }
    `}

    ${$props.userName &&
    css`
      background-color: ${theme.color.blue[300]};

      .user-name {
        font-size: ${AvatarSize[$props.size].typo};
        font-weight: 500;
        line-height: 1.1;
        text-transform: uppercase;
      }
    `}
    /* avtar */
    ${!$props.img &&
    !$props.userName &&
    css`
      color: white;
      background-color: ${theme.color.gray[400]};

      & svg {
        width: calc(${AvatarSize[$props.size].size} / 1.5);
      }
    `}
   

    /* badge */
    ${$props.badge &&
    css`
      &::after {
        position: absolute;
        right: 0;
        bottom: 0;
        display: block;
        content: '';
        border-radius: ${theme.radii.full}rem;
        transform: translateY(10%);
        ${AvatarSize[$props.size].badge};
        ${$props.badge === 'on'
          ? css`
              background-color: ${theme.color.green[500]};
              border-color: ${theme.color.white.white};
            `
          : css`
              background-color: ${theme.color.red[500]};
              border-color: ${theme.color.red[100]};
            `}
      }
    `}
  `}
`;
