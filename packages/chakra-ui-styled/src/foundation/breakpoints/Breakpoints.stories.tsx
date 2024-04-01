import styled from 'styled-components';
import Breakpoints, { BreakpointsSizes } from './breakpoint';
import { BreakpointsType } from './breakpoint.types';
import { Spacings } from '../spacings/spacing';

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
  margin: 1rem 0;
  border-radius: 1rem;
  ${({ theme }) => theme.breakpoint.base} {
    background-color: red;
  }
  ${({ theme }) => theme.breakpoint.sm} {
    background-color: orange;
  }
  ${({ theme }) => theme.breakpoint.md} {
    background-color: green;
  }
  ${({ theme }) => theme.breakpoint.lg} {
    background-color: blue;
  }
  ${({ theme }) => theme.breakpoint.xl} {
    background-color: navy;
  }
  ${({ theme }) => theme.breakpoint['2xl']} {
    background-color: purple;
  }
`;
const TableBox = styled.table`
  font-size: 14px;
  font-weight: 400;
  border-spacing: 0;

  & th {
    font-weight: 400;
    text-align: left;
    background-color: #f7fafc;
  }

  & th,
  & td {
    height: 38px;
    padding-right: 40px;
    padding-left: 20px;
  }
`;

export const BreakpointIndex = () => {
  return (
    <div>
      <h2>Breakpoint</h2>
      <p>viewport 변경시 미디어쿼리 사이즈에 따른 설정을 볼 수 있습니다.</p>
      <BreakpointBox />
      <TableBox>
        <tr>
          <th>props</th>
          <th>size</th>
          <th>media query</th>
        </tr>
        {Object.keys(Breakpoints).map((value) => {
          return (
            <tr>
              <td>{value}</td>
              <td>{BreakpointsSizes[value as keyof BreakpointsType]}</td>
              <td>{Breakpoints[value as keyof BreakpointsType]}</td>
            </tr>
          );
        })}
      </TableBox>
    </div>
  );
};
BreakpointIndex.storyName = 'Breakpoints';
