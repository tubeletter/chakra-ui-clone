import Card from './Card';
import { ReactNode } from 'react';

export type CardType = {
  variant: 'elevated' | 'filled' | 'outline';
  children?: ReactNode;
};
export default {
  title: 'chakra-ui-styled/components/date-display/card',
  component: Card,
  parameter: { controls: { expanded: true } },
  argTypes: {},
  arg: {
    variant: 'outline'
  }
};

export const TableIndex = (args: CardType) => {
  return (
    <>
      <h2>Demo</h2>
      <Card {...args}> Demo test</Card>
      <div>
        <Card variant="elevated"> </Card>
        <Card variant={'filled'}> </Card>
        <Card variant={'outline'}> </Card>
      </div>
    </>
  );
};

TableIndex.storyName = 'Table';
