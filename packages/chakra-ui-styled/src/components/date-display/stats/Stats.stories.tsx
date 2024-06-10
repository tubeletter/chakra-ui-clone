import Stats from './Stats';

export type StatsType = {
  label: string;
  number: string;
  text: string;
  type: 'increase' | 'decrease' | 'none';
};
export default {
  title: 'chakra-ui-styled/components/date-display/stat',
  component: Stats,
  parameter: { controls: { expanded: true } },
  argTypes: {},
  arg: {}
};

export const StatsIndex = (args: StatsType) => {
  return (
    <>
      <h2>Demo</h2>
      <Stats {...args} />
      <hr />
      <Stats type="increase" label="Stat Label" number="768.39€" text="23.36%" />
      <Stats type="decrease" label="Clicked" number="45" text="9.05%" />
      <Stats type="none" label="Collected Fees" number="£0.00" text="Feb 12 - Feb 28" />
    </>
  );
};

StatsIndex.storyName = 'Stat';
