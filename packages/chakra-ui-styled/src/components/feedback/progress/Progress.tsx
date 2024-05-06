import styled from 'styled-components';
import { createContext, useContext, useState } from 'react';

const ProgressContext = createContext({
  width: 0,
  setWidth: (value: number) => {}
});
const Progress = ({ height, percent, children }) => {
  const [width, setWidth] = useState(percent);
  const providerValue = {
    width,
    setWidth
  };
  return (
    <ProgressContext.Provider value={providerValue}>
      <Container>{children}</Container>
    </ProgressContext.Provider>
  );
};

const Inner = ({ size }) => {
  const { width } = useContext(ProgressContext);
  return <Bar size={} />;
};
const Track = () => {
  return <div></div>;
};
// height 4 8 12 16 color blue,orange,pink,purple,red,green,teal
const Container = styled.div`
  width: 320px;
`;

Progress.Inner = Inner;
Progress.Track = Track;

const Bar = styled.div<{ size: string }>`
  overflow: hidden;
`;
