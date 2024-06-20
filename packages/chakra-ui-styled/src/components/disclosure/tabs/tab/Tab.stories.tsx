import Tab from './Tab';
import { tabType } from './tab.types';
import styled from 'styled-components';
// import { TextComponent } from '../../../../foundation/typography/Text.styled';

export default {
  title: 'chakra-ui-styled/components/tabs',
  component: Tab,
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
const DemoContainer = styled.div`
  padding: 2rem;
  background-color: #ddd;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  div {
    display: flex;
    gap: 16px;
  }
  background-color: #eee;
  padding: 2rem;
`;
export const TabComponent = (args: tabType) => {
  return (
    <div>
      <h2>Tab</h2>
      <DemoContainer>
        <h2>demo</h2>
        <Tab {...args} />
      </DemoContainer>
      <Container>
        <div>
          <Tab size="sm" styleType="unstyled" active={true} text="Tabs" />
          <Tab size="sm" styleType="line" active={true} text="Tabs" />
          <Tab size="sm" styleType="enclosed" active={true} text="Tabs" />
          <Tab size="sm" styleType="softRounded" active={true} text="Tabs" />
          <Tab size="sm" styleType="solidRounded" active={true} text="Tabs" />
        </div>
        <div>
          <Tab size="md" styleType="unstyled" active={true} text="Tabs" />
          <Tab size="md" styleType="line" active={true} text="Tabs" />
          <Tab size="md" styleType="enclosed" active={true} text="Tabs" />
          <Tab size="md" styleType="softRounded" active={true} text="Tabs" />
          <Tab size="md" styleType="solidRounded" active={true} text="Tabs" />
        </div>
        <div>
          <Tab size="lg" styleType="unstyled" active={true} text="Tabs" />
          <Tab size="lg" styleType="line" active={true} text="Tabs" />
          <Tab size="lg" styleType="enclosed" active={true} text="Tabs" />
          <Tab size="lg" styleType="softRounded" active={true} text="Tabs" />
          <Tab size="lg" styleType="solidRounded" active={true} text="Tabs" />
        </div>
      </Container>
    </div>
  );
};

TabComponent.storyName = 'Tab';
