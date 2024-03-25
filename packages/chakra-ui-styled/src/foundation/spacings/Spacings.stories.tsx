import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
/* import { Spacings } from './spacing';
import { SpacingsType } from './spacing.types'; */

export default {
  title: 'chakra-ui-styled/foundation/spacings',
  parameters: {
    viewport: { defaultViewport: 'mobile_360' }
  }
};

const SpacingBox = styled.div<{ spacing: any }>`
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
  const themes = useContext(ThemeContext);
  // console.log(themes?.spacing);
  return (
    <>
      <h2>Spacing</h2>
      <TableBox>
        <tr>
          <th>Name</th>
          <th>Spacing</th>
          <th>value</th>
        </tr>

        {Object.keys(themes?.spacing).map((value) => {
          return (
            <tr>
              <td>{value}</td>
              <td>{themes?.spacing[value]}</td>
              <td>
                <SpacingBox spacing={themes?.spacing[value]} />
              </td>
            </tr>
          );
        })}
        {/*  {Object.keys(theme.colors).map((value) => {
          return (
            <tr>
              <td>{value}</td>
              <td>{Spacings[value as keyof SpacingsType]}</td>
              <td>
                <SpacingBox spacing={Spacings[value as keyof SpacingsType]} />
              </td>
            </tr>
          );
        })} */}
      </TableBox>
    </>
  );
};
SpacingIndex.storyName = 'Spacings';
