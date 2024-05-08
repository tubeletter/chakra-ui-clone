import Progress from './Progress';

export type progressType = {
  progress: number;
  size: string;
};
export default {
  title: 'chakra-ui-styled/components/feedback/progress',
  component: Progress,
  parameter: { controls: { expanded: true } },
  argTypes: {
    progress: {
      control: {
        type: 'select'
      }
    },
    size: {
      control: {
        type: 'select'
      }
    },
    color: {
      control: {
        type: 'select'
      }
    },
    arg: {
      progress: 10,
      size: 'md',
      color: 'green'
    }
  }
};

export const ProgressIndex = (args: progressType) => {
  return (
    <>
      <div>
        <h2>Progress Demo</h2>
        <Progress {...args} />
      </div>

      <br />
      <div>
        <Progress size="sm" progress={10}>
          <Progress.Inner />
          <Progress.Track />
        </Progress>
      </div>
    </>
  );
};
