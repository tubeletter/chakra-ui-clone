import styled, { css } from 'styled-components';
import { createContext, ReactNode, useContext, useState } from 'react';
import { progressType } from './Progress.stories';

export type contextType = progressType & {
  children?: ReactNode;
};

const ProgressContext = createContext({
  color: 'green',
  size: 'lg',
  percent: 0,
  setPercent: (value) => {}
});

const Progress = ({ color, size, progress, children }: contextType) => {
  const [percent, setPercent] = useState(progress);
  const [height, setHeight] = useState(0);
  const providerValue = {
    color,
    size,
    percent,
    setPercent,
    height
  };
  return (
    <ProgressContext.Provider value={providerValue}>
      <Container size={size}>{children}</Container>
    </ProgressContext.Provider>
  );
};

const Inner = () => {
  const { percent, size, color } = useContext(ProgressContext);
  const height = size === 'xs' ? 4 : size === 'sm' ? 8 : size === 'md' ? 16 : 20;
  return (
    <Bar percent={percent} color={color}>
      <svg width="100%" height={height} fill="none">
        <g opacity="0.28" clip-path="url(#clip0_1313_10587)">
          <line
            y1="-3.5"
            x2="58.1008"
            y2="-3.5"
            transform="matrix(0.563449 0.826151 -0.689727 0.72407 0 0)"
            stroke="white"
            stroke-width="7"
          />
          <line
            y1="-3.5"
            x2="58.1008"
            y2="-3.5"
            transform="matrix(0.563449 0.826151 -0.689727 0.72407 16.7368 0)"
            stroke="white"
            stroke-width="7"
          />
          <line
            y1="-3.5"
            x2="58.1008"
            y2="-3.5"
            transform="matrix(0.563449 0.826151 -0.689727 0.72407 33.4737 0)"
            stroke="white"
            stroke-width="7"
          />
          <line
            y1="-3.5"
            x2="58.1008"
            y2="-3.5"
            transform="matrix(0.563449 0.826151 -0.689727 0.72407 50.2105 0)"
            stroke="white"
            stroke-width="7"
          />
          <line
            y1="-3.5"
            x2="58.1008"
            y2="-3.5"
            transform="matrix(0.563449 0.826151 -0.689727 0.72407 66.9474 0)"
            stroke="white"
            stroke-width="7"
          />
          <line
            y1="-3.5"
            x2="58.1008"
            y2="-3.5"
            transform="matrix(0.563449 0.826151 -0.689727 0.72407 83.6842 0)"
            stroke="white"
            stroke-width="7"
          />
          <line
            y1="-3.5"
            x2="58.1008"
            y2="-3.5"
            transform="matrix(0.563449 0.826151 -0.689727 0.72407 100.421 0)"
            stroke="white"
            stroke-width="7"
          />
          <line
            y1="-3.5"
            x2="58.1008"
            y2="-3.5"
            transform="matrix(0.563449 0.826151 -0.689727 0.72407 117.158 0)"
            stroke="white"
            stroke-width="7"
          />
          <line
            y1="-3.5"
            x2="58.1008"
            y2="-3.5"
            transform="matrix(0.563449 0.826151 -0.689727 0.72407 133.895 0)"
            stroke="white"
            stroke-width="7"
          />
          <line
            y1="-3.5"
            x2="58.1008"
            y2="-3.5"
            transform="matrix(0.563449 0.826151 -0.689727 0.72407 150.632 0)"
            stroke="white"
            stroke-width="7"
          />
          <line
            y1="-3.5"
            x2="58.1008"
            y2="-3.5"
            transform="matrix(0.563449 0.826151 -0.689727 0.72407 167.368 0)"
            stroke="white"
            stroke-width="7"
          />
          <line
            y1="-3.5"
            x2="58.1008"
            y2="-3.5"
            transform="matrix(0.563449 0.826151 -0.689727 0.72407 184.105 0)"
            stroke="white"
            stroke-width="7"
          />
          <line
            y1="-3.5"
            x2="58.1008"
            y2="-3.5"
            transform="matrix(0.563449 0.826151 -0.689727 0.72407 200.842 0)"
            stroke="white"
            stroke-width="7"
          />
          <line
            y1="-3.5"
            x2="58.1008"
            y2="-3.5"
            transform="matrix(0.563449 0.826151 -0.689727 0.72407 217.579 0)"
            stroke="white"
            stroke-width="7"
          />
          <line
            y1="-3.5"
            x2="58.1008"
            y2="-3.5"
            transform="matrix(0.563449 0.826151 -0.689727 0.72407 234.316 0)"
            stroke="white"
            stroke-width="7"
          />
          <line
            y1="-3.5"
            x2="58.1008"
            y2="-3.5"
            transform="matrix(0.563449 0.826151 -0.689727 0.72407 251.053 0)"
            stroke="white"
            stroke-width="7"
          />
          <line
            y1="-3.5"
            x2="58.1008"
            y2="-3.5"
            transform="matrix(0.563449 0.826151 -0.689727 0.72407 267.789 0)"
            stroke="white"
            stroke-width="7"
          />
          <line
            y1="-3.5"
            x2="58.1008"
            y2="-3.5"
            transform="matrix(0.563449 0.826151 -0.689727 0.72407 284.526 0)"
            stroke="white"
            stroke-width="7"
          />
          <line
            y1="-3.5"
            x2="58.1008"
            y2="-3.5"
            transform="matrix(0.563449 0.826151 -0.689727 0.72407 301.263 0)"
            stroke="white"
            stroke-width="7"
          />
          <line
            y1="-3.5"
            x2="58.1008"
            y2="-3.5"
            transform="matrix(0.563449 0.826151 -0.689727 0.72407 318 0)"
            stroke="white"
            stroke-width="7"
          />
          <line
            y1="-3.5"
            x2="58.1008"
            y2="-3.5"
            transform="matrix(0.563449 0.826151 -0.689727 0.72407 334.737 0)"
            stroke="white"
            stroke-width="7"
          />
          <line
            y1="-3.5"
            x2="58.1008"
            y2="-3.5"
            transform="matrix(0.563449 0.826151 -0.689727 0.72407 351.474 0)"
            stroke="white"
            stroke-width="7"
          />
          <line
            y1="-3.5"
            x2="58.1008"
            y2="-3.5"
            transform="matrix(0.563449 0.826151 -0.689727 0.72407 368.21 0)"
            stroke="white"
            stroke-width="7"
          />
          <line
            y1="-3.5"
            x2="58.1008"
            y2="-3.5"
            transform="matrix(0.563449 0.826151 -0.689727 0.72407 384.947 0)"
            stroke="white"
            stroke-width="7"
          />
          <line
            y1="-3.5"
            x2="58.1008"
            y2="-3.5"
            transform="matrix(0.563449 0.826151 -0.689727 0.72407 -18 0)"
            stroke="white"
            stroke-width="7"
          />
        </g>
        <defs>
          <clipPath id="clip0_1313_10587">
            <rect width="400" height="40" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Bar>
  );
};

const Track = () => {
  return <Background />;
};
// height 4 8 12 16 color blue,orange,pink,purple,red,green,teal
const Container = styled.div<{ size: string }>`
  width: 400px;
  ${({ theme, size }) => {
    if (size === 'xs') {
      return css`
        height: 4px;
      `;
    } else if (size === 'sm') {
      return css`
        height: 8px;
      `;
    } else if (size === 'md') {
      return css`
        height: 12px;
      `;
    } else if (size === 'lg') {
      return css`
        height: 16px;
      `;
    }
  }}
  display: flex;
  overflow: hidden;
`;

const Bar = styled.div<{ percent: number; color: string }>`
  flex-shrink: 0;
  position: relative;
  ${({ percent, color }) => css`
    width: ${percent}%;
    background-color: ${color};
  `}
  svg {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
const Background = styled.div`
  background-color: #edf2f7;
  flex: 1;
`;
export default Progress;
Progress.Inner = Inner;
Progress.Track = Track;
