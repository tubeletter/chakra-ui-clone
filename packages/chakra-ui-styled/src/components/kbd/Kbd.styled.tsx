import styled, { css } from 'styled-components';

export const KbdStyle = styled.div`
  ${({ theme }) => css`
    display: inline-flex;
    flex: 1;
    flex: 0 0 auto;
    gap: 10px;
    align-items: center;
    align-self: flex-start;
    justify-content: center;
    justify-self: flex-start;
    width: auto;
    padding: 2px 4px;
    color: ${theme.color.gray[700]};
    background-color: ${theme.color.gray[50]};
    border-radius: ${theme.radii.md}rem;
    box-shadow: 0 -2px 0 0 ${theme.color.gray[200]} inset;
  `}
`;
