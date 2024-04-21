import { StoryFn } from '@storybook/react';
import { Card } from './Card';
import { ICardProps } from './Card.types';
export default {
  title: 'chakra-ui-sass/Components/Card',
  component: Card
};

export const CardStory: StoryFn<ICardProps> = (props) => {
  return (
    <div>
      <div>Card 입니다.</div>
      <hr />
      <Card {...props}>
        <Card.Header>Header</Card.Header>
        <Card.Body>Body</Card.Body>
        <Card.Footer>Header</Card.Footer>
      </Card>
    </div>
  );
};

CardStory.storyName = 'Card';
