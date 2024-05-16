import styled, { css } from 'styled-components';
import { TooltipProps } from './Tooltip';

const Placement = {
  ["top-start"]: css`
    ${({ theme }) => theme.typo.text.xs};
  `,
  ["top"]: css`
    ${({ theme }) => theme.typo.text.xs};
  `,
  ["top-end"]: css`
    ${({ theme }) => theme.typo.text.xs};
  `,
  ["right-start"]: css`
    ${({ theme }) => theme.typo.text.xs};
  `,
  ["right"]: css`
    ${({ theme }) => theme.typo.text.xs};
  `,
  ["right-end"]: css`
    ${({ theme }) => theme.typo.text.xs};
  `,
  ["bottom-start"]: css`
    ${({ theme }) => theme.typo.text.xs};
  `,
  ["bottom"]: css`
    ${({ theme }) => theme.typo.text.xs};
  `,
  ["bottom-end"]: css`
    ${({ theme }) => theme.typo.text.xs};
  `,
  ["left-start"]: css`
    ${({ theme }) => theme.typo.text.xs};
  `,
  ["left"]: css`
    ${({ theme }) => theme.typo.text.xs};
  `,
  ["left-end"]: css`
    ${({ theme }) => theme.typo.text.xs};
  `,
};
export const Tag = styled.div<TooltipProps>`
  ${({ theme }) => theme.typo.text.sm};
  ${({ placement }) => Placement[Placement]}
  display: flex;
  gap: 6px;
  ${({ colorScheme, theme }) => css`

  `};
`;