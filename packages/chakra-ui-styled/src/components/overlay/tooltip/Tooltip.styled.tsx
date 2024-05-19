import styled, { css } from 'styled-components';
import { TooltipProps } from './Tooltip';

const tooltipPosition = {
  ["auto-start"]: css`
    top: 0;
    right: 0;
    transform: translateX(100%);
  `,
  ["auto"]: css`
    top: 50%;
    left: 0;
    transform: translate(-100%, -50%);
  `,
  ["auto-end"]: css`
    top: 0;
    left: 0;
    transform: translateX(-100%);
  `,
  ["top-start"]: css`
  `,
  ["top"]: css`
  `,
  ["top-end"]: css`
  `,
  ["right-start"]: css`
  `,
  ["right"]: css`
  `,
  ["right-end"]: css`
  `,
  ["bottom-start"]: css`
  `,
  ["bottom"]: css`
  `,
  ["bottom-end"]: css`
  `,
  ["left-start"]: css`
  `,
  ["left"]: css`
  `,
  ["left-end"]: css`
  `,
};
export const StyleTooltip = styled.div<TooltipProps>`
  position: relative;
  & span{
    ${({ placement }) => tooltipPosition[placement]}
  }
`;
export const StyleText = styled.span`
  position: absolute;
  color: #fff;
  display: inline-flex;
  padding: 2px 8px;
  border-radius: 4px;
  ${({ theme }) => theme.typo.text.sm};
  background-color: ${({ theme }) => theme.color.gray[900]};
`;