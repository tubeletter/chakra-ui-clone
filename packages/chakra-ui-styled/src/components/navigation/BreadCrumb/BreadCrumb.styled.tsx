import styled, { css } from 'styled-components';
import { colorSchemeType } from './BreadCrumbs';

export const StyleBreadCrumb = styled.div<{ $color: colorSchemeType }>`
  display: flex;
  align-items: center;

  span[data-separator='true'] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    color: ${({ theme, $color }) => theme.color[$color][800]};
  }
`;

export const StyleBreadCrumbLink = styled.span<{ as: HTMLElementTagNameMap; $color: colorSchemeType }>`
  ${({ theme, as, $color }) => css`
    ${theme.typo.text.md};
    color: ${theme.color[$color][700]};
    ${as === 'a' &&
    css`
      &:hover {
        color: ${theme.color[$color][500]};
        text-decoration: underline;
      }
    `};
  `}
`;
