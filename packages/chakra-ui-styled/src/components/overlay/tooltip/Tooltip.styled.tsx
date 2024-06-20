import styled, { css } from 'styled-components';
import { TooltipProps } from './Tooltip';

const tooltipPosition = {
  ["auto-start"]: css`
    top: 0;
    right: 0;
    transform: translateX(calc(100% + 8px));
    & figure{
      top: 50%;
      left: 0;
      transform: translate(calc(-100% + 6px), -50%) rotate(-90deg)
    }
  `,
  ["auto"]: css`
    top: 50%;
    left: 0;
    transform: translate(calc(-100% - 8px), -50%);
    & figure{
      top: 50%;
      right: 0;
      transform: translate(calc(100% - 6px), -50%) rotate(90deg)
    }
  `,
  ["auto-end"]: css`
    top: 0;
    left: 0;
    transform: translateX(calc(-100% - 8px));
    & figure{
      top: 50%;
      right: 0;
      transform: translate(calc(100% - 6px), -50%) rotate(90deg)
    }
  `,
  ["top-start"]: css`
    top: 0;
    left: 0;
    transform: translateY(calc(-100% - 8px));
    & figure{
      bottom: 0;
      left: 0;
      transform: translate(8px, calc(100% - 2px)) rotate(180deg)
    }
  `,
  ["top"]: css`
    top: 0;
    left: 50%;
    transform: translate( -50%, calc(-100% - 8px));
    & figure{
      bottom: 0;
      left: 50%;
      transform: translate(-50%, calc(100% - 2px)) rotate(180deg)
    }
  `,
  ["top-end"]: css`
    top: 0;
    right: 0;
    transform: translateY(calc(-100% - 8px));
    & figure{
      bottom: 0;
      right: 0;
      transform: translate(-8px, calc(100% - 2px)) rotate(180deg)
    }
  `,
  ["right-start"]: css`
    top: 0;
    right: 0;
    transform: translateX(calc(100% + 8px));
    & figure{
      top: 50%;
      left: 0;
      transform: translate(calc(-100% + 6px), -50%) rotate(-90deg)
    }
  `,
  ["right"]: css`
    top: 50%;
    right: 0;
    transform: translate(calc(100% + 8px), -50%);
    & figure{
      top: 50%;
      left: 0;
      transform: translate(calc(-100% + 6px), -50%) rotate(-90deg)
    }
  `,
  ["right-end"]: css`
    bottom: 0;
    right: 0;
    transform: translateX(calc(100% + 8px));
    & figure{
      top: 50%;
      left: 0;
      transform: translate(calc(-100% + 6px), -50%) rotate(-90deg)
    }
  `,
  ["bottom-start"]: css`
    bottom: 0;
    left: 0;
    transform: translateY(calc(100% + 8px));
    & figure{
      top: 0;
      left: 0;
      transform: translate(8px, calc(-100% + 2px))
    }
  `,
  ["bottom"]: css`
    bottom: 0;
    left: 50%;
    transform: translate(-50%, calc(100% + 8px));
    & figure{
      top: 0;
      left: 50%;
      transform: translate(-50%, calc(-100% + 2px))
    }
  `,
  ["bottom-end"]: css`
    bottom: 0;
    right: 0;
    transform: translateY(calc(100% + 8px));
    & figure{
      top: 0;
      right: 0;
      transform: translate(-8px, calc(-100% + 2px))
    }
  `,
  ["left-start"]: css`
    top: 0;
    left: 0;
    transform: translateX(calc(-100% - 8px));
    & figure{
      top: 50%;
      right: 0;
      transform: translate(calc(100% - 6px), -50%) rotate(90deg)
    }
  `,
  ["left"]: css`
    top: 50%;
    left: 0;
    transform: translate(calc(-100% - 8px), -50%);
    & figure{
      top: 50%;
      right: 0;
      transform: translate(calc(100% - 6px), -50%) rotate(90deg)
    }
  `,
  ["left-end"]: css`
    bottom: 0;
    left: 0;
    transform: translateX(calc(-100% - 8px));
    & figure{
      top: 50%;
      right: 0;
      transform: translate(calc(100% - 6px), -50%) rotate(90deg)
    }
  `,
};
export const ArrowIconStyle = () => {
  return (
    <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.41421 8L13.5858 8C14.4767 8 14.9229 6.92286 14.2929 6.29289L8.70711 0.707106C8.31658 0.316582 7.68342 0.316582 7.29289 0.707106L1.70711 6.29289C1.07714 6.92286 1.52331 8 2.41421 8Z" fill="#171923"/>
    </svg>
  );
};
export const StyleTooltip = styled.div<TooltipProps>`
  position: relative;
  display: inline-flex;
  & span{
    ${({ placement }) => tooltipPosition[placement]}
  }
  &:hover span{
    opacity: 1;
  }
`;
export const StyleText = styled.span`
  position: absolute;
  color: #fff;
  display: inline-flex;
  white-space: nowrap;
  padding: 2px 8px;
  border-radius: 4px;
  ${({ theme }) => theme.typo.text.sm};
  background-color: ${({ theme }) => theme.color.gray[900]};
  opacity: 0;
  transition: 0.3s;
  & figure{
    width: 16px;
    height: 8px;
    position: absolute;
    & svg{ position:absolute }
  }
`;