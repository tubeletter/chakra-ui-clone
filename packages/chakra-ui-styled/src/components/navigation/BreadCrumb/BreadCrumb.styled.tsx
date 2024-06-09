import styled, { css } from 'styled-components';

export const StyleBreadCrumb = styled.div`
  display: flex;
  align-items: center;

  span[data-separator='true'] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    color: ${({ theme }) => theme.color.gray[800]};
  }
`;

export const StyleBreadCrumbLink = styled.span<{ as: HTMLElementTagNameMap }>`
  ${({ theme, as }) => css`
    ${theme.typo.text.md};
    color: ${({ theme }) => theme.color.gray[700]};
    ${as === 'a' &&
    css`
      &:hover {
        color: ${theme.color.blue[500]};
        text-decoration: underline;
      }
    `};
  `}
`;
