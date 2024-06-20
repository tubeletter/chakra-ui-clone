import styled from 'styled-components';
import Avatar, { AvatarProps, AvatarSize } from './Avatar';

export default {
  title: 'chakra-ui-styled/components/Avatar',
  component: Avatar,
  parameters: { controls: { expanded: true } },

  argTypes: {
    size: { control: { type: 'select' } },
    userName: { control: { type: 'text', maxLength: 2 } }
  },
  args: {
    size: '2xl',
    img: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1299&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const AvatarWrap = styled.div`
  display: flex;
  gap: 45px;
  align-items: center;
`;

export const AvatarIndex = (args: AvatarProps) => {
  const AvatarArr: AvatarSize[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
  return (
    <Wrapper>
      <h1>Avatar</h1>

      <h2>Avatar Demo</h2>
      <div>
        <Avatar {...args} />
      </div>

      <h2>Avatar Index</h2>

      <AvatarWrap>
        {AvatarArr.map((size) => {
          return (
            <Avatar
              size={size}
              img="https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1299&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              userName="TS"
            />
          );
        })}
      </AvatarWrap>

      <AvatarWrap>
        {AvatarArr.map((size) => {
          return <Avatar size={size} />;
        })}
      </AvatarWrap>

      <AvatarWrap>
        {AvatarArr.map((size) => {
          return <Avatar size={size} userName="TS" />;
        })}
      </AvatarWrap>
    </Wrapper>
  );
};
AvatarIndex.storyName = 'Avatar';
