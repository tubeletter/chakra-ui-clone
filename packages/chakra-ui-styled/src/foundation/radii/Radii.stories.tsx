import styled from 'styled-components';
import { Colors } from '../colors/color';
import { Radii } from './radii';
import { RadiiType } from './radii.types';
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
  box-shadow: box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
  ;
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