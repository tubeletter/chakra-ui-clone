import styled from 'styled-components';
import { Colors } from '../colors/colorPalette';
import { Radii } from './radii';
import { RadiiType } from './radii.types';
export default {
  title: 'chakra-ui-styled/foundation/radii',
  parameters: {
    viewport: { defaultViewport: 'mobile_360' }
  }
};

const RadiiBox = styled.div<{ radius: number }>`
  width: 120px;
  height: 120px;
  background-color: #fff;
  border: 1px solid ${Colors.gray200};
  border-radius: ${({ radius }) => radius}rem;
  box-shadow:
    0px 1px 2px 0px #0000000f,
    0px 1px 3px 0px #0000001a;
`;

export const Test = () => {
  return (
    <div style={{ display: 'flex', gap: '20px 20px', flexFlow: 'row wrap' }}>
      {Object.keys(Radii).map((value) => {
        return (
          <div>
            <div>{value}</div>
            <RadiiBox radius={Radii[value as keyof RadiiType]} />
          </div>
        );
      })}
    </div>
  );
};
Test.storyName = 'Radii';
