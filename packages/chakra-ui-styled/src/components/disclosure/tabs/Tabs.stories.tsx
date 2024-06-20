import Tabs from './Tabs';
import { tabType } from './tab/tab.types';
import styled from 'styled-components';

export default {
  title: 'chakra-ui-styled/components/disclosure/tabs',
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
        type: 'boolean'
      }
    },
    arg: {
      size: 'lg',
      styleType: 'unstyled',
      active: 'true',
      text: 'Tabs'
    }
  }
};

const Container = styled.div`
  background-color: #eee;
`;

export const TabsComponent = (args: tabType) => {
  return (
    <Container>
      <h2>Tabs Demo</h2>
      <Tabs {...args} />
      <div>
        <h2>unstyled</h2>
        <Tabs size="lg" styleType="unstyled" active={true} text="Tabs" />
        <Tabs size="md" styleType="unstyled" active={false} text="Tabs" />
        <Tabs size="sm" styleType="unstyled" active={false} text="Tabs" />
      </div>
      <div>
        <h2>line Tabs</h2>
        <Tabs size="lg" styleType="line" active={true} text="Tabs" />
        <Tabs size="md" styleType="line" active={true} text="Tabs" />
        <Tabs size="sm" styleType="line" active={true} text="Tabs" />
      </div>
      <div>
        <h2>enclosed Tabs</h2>
        <Tabs size="lg" styleType="enclosed" active={true} text="Tabs" />
        <Tabs size="md" styleType="enclosed" active={true} text="Tabs" />
        <Tabs size="sm" styleType="enclosed" active={true} text="Tabs" />
      </div>
      <div>
        <h2>soft-rounded Tabs</h2>
        <Tabs size="lg" styleType="softRounded" active={true} text="Tabs" />
        <Tabs size="md" styleType="softRounded" active={true} text="Tabs" />
        <Tabs size="sm" styleType="softRounded" active={true} text="Tabs" />
      </div>
      <div>
        <h2>solid-rounded Tabs</h2>
        <Tabs size="lg" styleType="solidRounded" active={true} text="Tabs" />
        <Tabs size="md" styleType="solidRounded" active={true} text="Tabs" />
        <Tabs size="sm" styleType="solidRounded" active={true} text="Tabs" />
      </div>
    </Container>
  );
};

TabsComponent.storyName = 'Tabs';
