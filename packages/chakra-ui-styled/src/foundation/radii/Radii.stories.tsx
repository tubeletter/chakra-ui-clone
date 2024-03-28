import styled from 'styled-components';
import { Colors } from '../colors/colorPalette';
import { Radii } from './radii';
import { RadiiType } from './radii.types';
import { Shadows } from '../shadows/shadow';

export default {
  title: 'chakra-ui-styled/foundation/radii',
  parameters: {
    viewport: { defaultViewport: 'mobile_360' }
  }
};

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 20px 20px;
`;
const RadiiBox = styled.div<{ radius: number }>`
  width: 120px;
  height: 120px;
  background-color: #fff;
  border: 1px solid ${Colors.gray200};
  border-radius: ${({ radius }) => radius}rem;
  box-shadow: ${Shadows.base};
`;

export const Test = () => {
  return (
    <Wrapper>
      {Object.keys(Radii).map((value) => {
        return (
          <div>
            <div>{value}</div>
            <RadiiBox radius={Radii[value as keyof RadiiType]} />
          </div>
        );
      })}
    </Wrapper>
  );
};
Test.storyName = 'Radii';