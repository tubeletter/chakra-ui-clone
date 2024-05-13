import Alert from './Alert';

export type alertType = {
  alertStyle: 'vanilla' | 'solid' | 'top-border' | 'left-border';
  variant: 'info' | 'warning' | 'error' | 'success';
  title?: string;
  text?: string;
};
export default {
  title: 'chakra-ui-styled/components/feedback/alert',
  component: Alert,
  parameter: { controls: { expanded: true } },
  argTypes: {
    alertStyle: { control: { type: 'select' } },
    variant: { control: { type: 'select' } },
    title: { control: { type: 'text' } },
    text: { control: { type: 'text' } }
  },
  arg: {
    variant: 'info',
    alertStyle: 'vanilla',
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
        <Alert alertStyle="vanilla" variant="info" />
        <br />

        <Alert alertStyle="left-border" variant="info" />

        <br />

        <Alert alertStyle="top-border" variant="info" />
        <br />

        <Alert alertStyle="solid" variant="info" />
      </div>
      <div>
        <h3>warning</h3>
        <Alert alertStyle="vanilla" variant="warning" />
        <br />
        <Alert alertStyle="left-border" variant="warning" />
        <br />

        <Alert alertStyle="top-border" variant="warning" />
        <br />

        <Alert alertStyle="solid" variant="warning" />
      </div>
      <div>
        <h3>error</h3>
        <Alert alertStyle="vanilla" variant="error" />
        <br />

        <Alert alertStyle="left-border" variant="error" />
        <br />

        <Alert alertStyle="top-border" variant="error" />
        <br />

        <Alert alertStyle="solid" variant="error" />
      </div>
      <div>
        <h3>success</h3>
        <Alert alertStyle="vanilla" variant="success" />
        <br />

        <Alert alertStyle="left-border" variant="success" />
        <br />

        <Alert alertStyle="top-border" variant="success" />
        <br />

        <Alert alertStyle="solid" variant="success" />
      </div>
    </>
  );
};
AlertIndex.storyName = 'Alert';
