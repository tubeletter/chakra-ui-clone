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
        <h3>Info</h3>
        <Alert style="vanilla" variant="info" />
        <Alert style="left-border" variant="info" />
        <Alert style="top-border" variant="info" />
        <Alert style="solid" variant="info" />
      </div>
      <div>
        <h3>warning</h3>
        <Alert style="vanilla" variant="warning" />
        <Alert style="left-border" variant="warning" />
        <Alert style="top-border" variant="warning" />
        <Alert style="solid" variant="warning" />
      </div>
      <div>
        <h3>error</h3>
        <Alert style="vanilla" variant="error" />
        <Alert style="left-border" variant="error" />
        <Alert style="top-border" variant="error" />
        <Alert style="solid" variant="error" />
      </div>
      <div>
        <h3>success</h3>
        <Alert style="vanilla" variant="success" />
        <Alert style="left-border" variant="success" />
        <Alert style="top-border" variant="success" />
        <Alert style="solid" variant="success" />
      </div>
    </>
  );
};
AlertIndex.storyname = 'Alert';
