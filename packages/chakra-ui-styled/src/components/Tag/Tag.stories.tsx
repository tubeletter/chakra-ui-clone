import styled from 'styled-components';
import Tag, { TagProps, colorSchemeType } from './Tag';

export default {
  title: 'chakra-ui-styled/components/Tag',
  component: Tag,
  parameters: { controls: { expanded: true } },

  argTypes: {
    children: { control: { type: 'text' } },
    size: { control: { type: 'select' } },
    colorScheme: { control: { type: 'select' } },
    variant: { control: { type: 'radio' } }
  },
  args: {
    children: '태그 테스트',
    size: 'md',
    colorScheme: 'blue',
    variant: 'solid',
    removeButton: true
  }
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const TagWrap = styled.div`
  display: flex;
  gap: 45px;
  align-items: center;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const TagIndex = (args: TagProps) => {
  const tagText: string = 'Tag';
  const colorArr: colorSchemeType[] = ['gray', 'blue', 'teal', 'green', 'red', 'purple', 'pink', 'orange'];
  return (
    <Wrapper>
      <h1>Tag</h1>

      <h2>Tag Demo</h2>
      <div>
        <Tag {...args} />
      </div>

      <h2>Tag Index</h2>
      {colorArr.map((color) => (
        <TagWrap>
          <div>
            <Tag removeButton={true} size="sm" variant="subtle" colorScheme={color}>
              {tagText}
            </Tag>
            <Tag removeButton={true} size="md" variant="subtle" colorScheme={color}>
              {tagText}
            </Tag>
            <Tag removeButton={true} size="lg" variant="subtle" colorScheme={color}>
              {tagText}
            </Tag>
          </div>
          <div>
            <Tag removeButton={true} size="sm" variant="solid" colorScheme={color}>
              {tagText}
            </Tag>
            <Tag removeButton={true} size="md" variant="solid" colorScheme={color}>
              {tagText}
            </Tag>
            <Tag removeButton={true} size="lg" variant="solid" colorScheme={color}>
              {tagText}
            </Tag>
          </div>
          <div>
            <Tag removeButton={true} size="sm" variant="outline" colorScheme={color}>
              {tagText}
            </Tag>
            <Tag removeButton={true} size="md" variant="outline" colorScheme={color}>
              {tagText}
            </Tag>
            <Tag removeButton={true} size="lg" variant="outline" colorScheme={color}>
              {tagText}
            </Tag>
          </div>
        </TagWrap>
      ))}
    </Wrapper>
  );
};
TagIndex.storyName = 'Tag';
