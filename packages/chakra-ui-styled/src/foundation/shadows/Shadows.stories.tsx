import styled from 'styled-components';
import { colorPalette } from '../colors/colorPalette';
import { Radii } from '../radii/radii';
import { Shadows } from './shadow';
import { ShadowsType } from './shadows.types';
export default {
  title: 'chakra-ui-styled/foundation/shadows',
  parameters: {
    viewport: { defaultViewport: 'mobile_360' }
  }
};
const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 60px 100px;
`;
const ShadowBox = styled.div<{ shadows: string }>`
  width: 80px; height: 80px;
  background-color: #fff;
  border: 1px solid ${colorPalette.gray[200]};
  border-radius: ${Radii.base}rem;
  box-shadow: ${({ shadows }) => shadows};
`;

export const Test = () => {
  return (
    <Wrapper>
      {Object.keys(Shadows).map((value) => {
        return (
          <div>
            <div>{value}</div>
            <ShadowBox shadows={Shadows[value as keyof ShadowsType]} />
          </div>
        );
      })}
    </Wrapper>

  );
};
Test.storyName = 'Shadows';
