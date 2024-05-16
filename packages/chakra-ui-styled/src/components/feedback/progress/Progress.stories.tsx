import Progress from './Progress';

export type progressType = {
  progress: number;
  size: 'xs' | 'sm' | 'md' | 'lg';
  color: string;
};
export default {
  title: 'chakra-ui-styled/components/feedback/progress',
  component: Progress,
  parameter: { controls: { expanded: true } },
  argTypes: {
    progress: {
      control: {
        type: 'number'
      }
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: {
        type: 'select'
      }
    },
    color: {
      options: ['green', 'blue', 'red', 'orange', 'pink', 'purple', 'teal'],
      control: {
        type: 'select'
      }
    }
  },
  arg: {
    progress: 10,
    size: 'lg',
    color: 'red'
  }
};

export const ProgressIndex = (args: progressType) => {
  return (
    <>
      <div>
        <h2>Progress Demo</h2>
        <br />
        <Progress {...args}>
          <Progress.Inner />
          <Progress.Track />
        </Progress>
      </div>
      <br />
      <div>
        <Progress size="xs" progress={100} color="green">
          <Progress.Inner />
          <Progress.Track />
        </Progress>
      </div>
      <br />
      <div>
        <Progress size="sm" progress={100} color="pink">
          <Progress.Inner />
          <Progress.Track />
        </Progress>
      </div>
      <br />
      <div>
        <Progress size="md" progress={100} color="teal">
          <Progress.Inner />
          <Progress.Track />
        </Progress>
      </div>
      <br />
      <div>
        <Progress size="lg" progress={100} color="orange">
          <Progress.Inner />
          <Progress.Track />
        </Progress>
      </div>
    </>
  );
};

ProgressIndex.storyName = 'Progress';
