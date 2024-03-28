import styled from 'styled-components';
import { Colors } from './color';
import { ColorsType } from './color.types';

export default {
  title: 'chakra-ui-styled/foundation/colors',
  parameters: {
    viewport: { defaultViewport: 'mobile_360' }
  }
};

const StyledTest = styled.div`
  color: ${({ theme }) => theme.colors.black};
`;

const ColorBox = styled.div<{ bgColor: string }>`
  width: 120px;
  height: 120px;
  background-color: ${({ bgColor }) => bgColor};
  border: 1px solid #f6f6f6;
  border-radius: 8px;
`;

export const Test2 = () => {
  return (
    <div>
      ㅇㅇㅇㅇ
      <StyledTest>테마 받기? black</StyledTest>
      <div style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
        {Object.keys(Colors).map((value) => {
          return (
            <div>
              <div>{value}</div>
              <ColorBox bgColor={Colors[value as keyof ColorsType]} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
Test2.storyName = 'Colors';
