import Tabs from './Tabs';
import { tabType } from './tab/tab.types';

export default {
  title: 'chakra-ui-styled/components/tabs',
  component: Tabs,
  parameter: { controls: { expanded: true } },
  argTypes: {
    size: {
      control: {
        type: 'select'
      }
    },
    styleType: {
      control: {
        type: 'select'
      }
    },
    active: {
      control: {
        type: 'radio'
      }
    },
    arg: {
      size: 'lg',
      styleType: 'unstyled',
      active: true,
      text: 'Tabs'
    }
  }
};
export const TabsComponent = (args: tabType) => {
  return (
    <div>
      <h2>Tabs Demo</h2>
      <Tabs {...args} />
      <h2>unstyled Tabs lg</h2>
      <Tabs size="lg" styleType="unstyled" active={true} text="Tabs" />
      <Tabs size="lg" styleType="unstyled" active={false} text="Tabs" />
      <Tabs size="lg" styleType="unstyled" active={false} text="Tabs" />
      <h2>unstyled Tabs md</h2>
      <Tabs size="md" styleType="unstyled" active={true} text="Tabs" />
      <Tabs size="md" styleType="unstyled" active={false} text="Tabs" />
      <Tabs size="md" styleType="unstyled" active={false} text="Tabs" />
    </div>
  );
};

TabsComponent.storyName = 'Tabs';
