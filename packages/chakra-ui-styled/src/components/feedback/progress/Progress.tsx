import styled, { css } from 'styled-components';
import { createContext, ReactNode, useContext, useState } from 'react';
import { progressType } from './Progress.stories';

export type contextType = progressType & {
  children?: ReactNode;
};

const ProgressContext = createContext({
  color: 'green',
  size: 'sm',
  percent: 0,
  setPercent: (value) => {}
});

const Progress = ({ color, size, progress, children }: contextType) => {
  const [percent, setPercent] = useState(progress);
  const providerValue = {
    color,
    size,
    percent,
    setPercent
  };
  return (
    <ProgressContext.Provider value={providerValue}>
      <Container size={size}>{children}</Container>
    </ProgressContext.Provider>
  );
};

const Inner = () => {
  const { size, color } = useContext(ProgressContext);
  return <Bar size={size} color={color} />;
};
const Track = () => {
  return <div></div>;
};
// height 4 8 12 16 color blue,orange,pink,purple,red,green,teal
const Container = styled.div<{ size: string }>`
  width: 320px;
  ${({ theme, size }) => {
    if (size === 'sm') {
      return css``;
    } else if (size === 'md') {
      return css``;
    } else if (size === 'lg') {
      return css``;
    }
  }}
`;

export default Progress;
Progress.Inner = Inner;
Progress.Track = Track;

const Bar = styled.div<{ size: string }>`
  overflow: hidden;
`;
