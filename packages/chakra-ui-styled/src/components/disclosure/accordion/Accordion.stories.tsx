import Accordion from './Accordion';
import styled from 'styled-components';
import { ReactNode } from 'react';
import { TextProps } from '../../../foundation/typography/Text';

export type accordionType = {
  state: boolean;
  title: string;
  text: string;
  children?: ReactNode;
  size: TextProps['size'];
};

export default {
  title: 'chakra-ui-styled/components/disclosure/accordion',
  component: Accordion,
  parameter: { controls: { expanded: true } },

  argTypes: {
    size: { control: { type: 'select' } },
    state: { control: { type: 'boolean' } },
    title: { control: { type: 'text' } },
    text: { control: { type: 'text' } },
    arg: {
      size: 'md',
      state: false,
      title: 'title',
      text: 'text'
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
          <Accordion.Toggle>
            <Accordion.Panel />
          </Accordion.Toggle>
        </Accordion>
        <br />
        <hr />
        <br />
        <Accordion state={false} title="just Sample state false" size="md" text="text">
          <Accordion.Toggle />
        </Accordion>
        <Accordion state={true} title="just Sample state true" size="md" text="text">
          <Accordion.Toggle />
        </Accordion>
        <Accordion state={false} title="u can click to expand" size="md" text="text">
          <Accordion.Toggle>
            <Accordion.Panel />
          </Accordion.Toggle>
        </Accordion>
      </Container>
    </>
  );
};
AccordionComponent.storyName = 'Accordion';
