import Accordion from './Accordion';
import styled from 'styled-components';

export type accordionType = {
  state: boolean;
  title: string;
  text: string;
  children: string;
};

export default {
  title: 'chakra-ui-styled/components/accordion',
  component: Accordion,
  parameter: { controls: { expanded: true } },
  argTypes: {
    state: {
      control: {
        type: 'boolean',
        title: 'Accordion Button',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    }
  }
};

const Container = styled.div``;
export const AccordionComponent = (args: accordionType) => {
  return (
    <>
      <Container>
        <h2>Accordion Demo</h2>
        <Accordion {...args}>
          <Accordion.Toggle title={args.title}>
            <Accordion.Panel>{args.text}</Accordion.Panel>
          </Accordion.Toggle>
        </Accordion>
      </Container>
    </>
  );
};
AccordionComponent.storyName = 'Accordion';
