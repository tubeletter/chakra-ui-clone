import styled from 'styled-components';
import Badge, { BadgeProps, colorSchemeType } from './Badge';

export default {
  title: 'chakra-ui-styled/components/Badge',
  component: Badge,
  parameters: { controls: { expanded: true } },

  argTypes: {
    variant: { control: { type: 'radio' } },
    colorScheme: { control: { type: 'select' } },
    children: { control: { type: 'text' } },
  },
  args: {
    variant: 'solid',
    colorScheme: 'blue',
    children: '뱃지 테스트',
  }
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const BtnBox = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const BadgeIndex = (args: BadgeProps) => {
  const BadgeText: string = 'BADGE';
  const colorArr: colorSchemeType[] = ['gray', 'blue', 'teal', 'green', 'red', 'purple', 'pink', 'orange'];
  return (
    <Wrapper>
      <h1>Badge</h1>

      <h2>Badge Demo</h2>
      <div>
        <Badge {...args} />
      </div>

      <h2>Badge Index</h2>

      {colorArr.map((color) => (
        <BtnBox>
          <Badge colorScheme={color} variant="solid">
            {BadgeText}
          </Badge>
          <Badge colorScheme={color} variant="subtle">
            {BadgeText}
          </Badge>
          <Badge colorScheme={color} variant="outline">
            {BadgeText}
          </Badge>
        </BtnBox>
      ))}
    </Wrapper>
  );
};
BadgeIndex.storyName = 'Badge';
