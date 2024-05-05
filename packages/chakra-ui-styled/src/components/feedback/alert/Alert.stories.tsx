import Tabs from '../../disclosure/tabs/Tabs';
import Alert from './Alert';
export type alertType = {
  variant: 'vanilla' | 'solid' | 'top-border' | 'left-border';
  color: 'warning' | 'error' | 'success' | 'info';
  title?: string;
  text?: string;
};
export default {
  title: 'chakra-ui-styled/components/alert',
  component: Alert,
  parameter: { controls: { expanded: true } },
  argTypes: {
    variant: { control: { type: 'select' } },
    color: { control: { type: 'select' } },
    title: { control: { type: 'text' } },
    text: { control: { type: 'text' } }
  },
  arg: {
    variant: 'vanilla',
    color: 'info',
    title: 'Title',
    text: 'This is a description.'
  }
};

export const AlertIndex = (args: alertType) => {
  return (
    <>
      <div>
        <h2>Alert Demo</h2>
        <Alert {...args} />
      </div>
    </>
  );
};
AlertIndex.storyname = 'Alert';
