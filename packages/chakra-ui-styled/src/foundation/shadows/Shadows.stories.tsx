import styled from 'styled-components';
import { Colors } from '../colors/color';
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
  border: 1px solid ${Colors.gray200};
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
      {/* outline을 색상을 선택할 수 있도록 설정하고 싶음,
       color값 리스트 최종 확정되면 반영하기
       커스텀 컬러도 입력가능하게 input넣기 */}
    </Wrapper>

  );
};
Test.storyName = 'Shadows';
