import styled from 'styled-components';
import Breakpoints from './breakpoint';
import { Radii } from '../radii/radii';

export default {
  title: 'chakra-ui-styled/foundation/breakpoints',
  parameters: {
    viewport: {
      // defaultViewport: 'md - min-width : 768px'
    }
  }
};
const BreakpointBox = styled.div`
  width: 100px;
  height: 100px;
  border-radius: ${Radii['2xl']}rem;
  ${Breakpoints.base} {
    background-color: red;
  }
  ${Breakpoints.sm} {
    background-color: orange;
  }
  ${Breakpoints.md} {
    background-color: green;
  }
  ${Breakpoints.lg} {
    background-color: blue;
  }
  ${Breakpoints.xl} {
    background-color: navy;
  }
  ${Breakpoints['2xl']} {
    background-color: purple;
  }
`;

export const BreakpointIndex = () => {
  return (
    <>
      <h2>Breakpoint</h2>
      <p>viewport 변경시 미디어쿼리 사이즈에 따른 설정을 볼 수 있습니다.</p>
      <BreakpointBox />
    </>
  );
};
BreakpointIndex.storyName = 'Breakpoints';
