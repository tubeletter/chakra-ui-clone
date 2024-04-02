import styled from 'styled-components';
import Colors from './Colors';
import { colorPalette } from './colorPalette';

export default {
  title: 'chakra-ui-styled/foundation/Colors',
  component: Colors,
  argTypes: {},
  parameter: {}
};

const StyledTest = styled.div`
  color: ${({ theme }) => theme.color.blackAlpha[100]};
`;

export const Color = () => {
  return (
    <>
      <StyledTest>안녕하세요</StyledTest>
      {Object.keys(colorPalette).map((v, i) => {
        return (
          <div key={i}>
            {Object.keys(colorPalette[v as keyof typeof colorPalette]!).map((v2, i2) => {
              const code = v + '.' + v2;
              return (
                <>
                  <Colors colorCode={code} key={i2} color={v} number={v2} />
                </>
              );
            })}
          </div>
        );
      })}
    </>
  );
};
Color.storyName = 'Colors';
