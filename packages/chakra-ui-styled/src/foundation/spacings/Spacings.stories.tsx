import styled from 'styled-components';
import { Spacings } from './spacing';
import { SpacingsType } from './spacing.types';

export default {
  title: 'chakra-ui-styled/foundation/spacings',
  parameters: {
    viewport: { defaultViewport: 'mobile_360' }
  }
};

const SpacingBox = styled.div<{ spacing: string }>`
  width: ${({ spacing }) => spacing};
  height: 15px;
  background-color: #fed7d7;
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

export const SpacingIndex = () => {
  return (
    <>
      <h2>Spacing</h2>
      <TableBox>
        <tr>
          <th>Name</th>
          <th>Spacing</th>
          <th>value</th>
        </tr>
        {Object.keys(Spacings).map((value) => {
          return (
            <tr>
              <td>{value}</td>
              <td>{Spacings[value as keyof SpacingsType]}</td>
              <td>
                <SpacingBox spacing={Spacings[value as keyof SpacingsType]} />
              </td>
            </tr>
          );
        })}
      </TableBox>
    </>
  );
};
SpacingIndex.storyName = 'Spacings';
