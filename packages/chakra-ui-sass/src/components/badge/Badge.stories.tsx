import { StoryFn } from '@storybook/react';
import { IBadgeProps } from './Badge.types';
import { Badge } from './Badge';
export default {
  title: 'chakra-ui-sass/Components/Badge',
  component: Badge
};

export const BadgeStory: StoryFn<IBadgeProps> = (props) => {
  return (
    <>
      <Badge {...props}>BADGE</Badge>
    </>
  );
};

BadgeStory.storyName = 'Badge';
