import styled from 'styled-components';
import { Containers } from './container';
import { ContainersType } from './container.types';
import { Radii } from '../radii/radii';
import { colorPalette } from '../colors/colorPalette';
import { Shadows } from '../shadows/shadow';

export default {
  title: 'chakra-ui-styled/foundation/containers',
  parameters: {
    viewport: { defaultViewport: 'mobile_360' }
  }
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const Container = styled.div<{ max: string }>`
  width: 100%;
  max-width: ${({ max }) => max};
  height: 320px;
  background-color: #fff;
  border: 1px solid ${colorPalette.gray[200]};
  border-radius: ${Radii.base};
  box-shadow: ${Shadows.base};
`;

export const Test = () => {
  return (
    <Wrapper>
      <p>각 Breakpoint 기준으로 max dimension을 확인할 수 있습니다.</p>
      {Object.keys(Containers).map((value) => {
        return (
          <div>
            <div>{value}</div>
            <div>max-width: {Containers[value as keyof ContainersType]}</div>
            <Container max={Containers[value as keyof ContainersType]} />
          </div>
        );
      })}
    </Wrapper>
  );
};
Test.storyName = 'Containers';
