import Tabs from '../../disclosure/tabs/Tabs';
import Alert from './Alert';

export type alertType = {
  style: 'vanilla' | 'solid' | 'top-border' | 'left-border';
  variant: 'info' | 'warning' | 'error' | 'success';
  title?: string;
  text?: string;
};
export default {
  title: 'chakra-ui-styled/components/alert',
  component: Alert,
  parameter: { controls: { expanded: true } },
  argTypes: {
    style: { control: { type: 'select' } },
    variant: { control: { type: 'select' } },
    title: { control: { type: 'text' } },
    text: { control: { type: 'text' } }
  },
  arg: {
    variant: 'info',
    style: 'vanilla',
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
      <div>
        <Alert style="vanilla" variant="info" />
      </div>
    </>
  );
};
AlertIndex.storyname = 'Alert';
