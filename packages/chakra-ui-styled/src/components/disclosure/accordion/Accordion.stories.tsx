import Accordion from './Accordion';
import styled from 'styled-components';
import { ReactNode } from 'react';
import { TextProps } from '../../../foundation/typography/Text';

export type AccordionType = {
  state?: boolean;
  title: string;
  text: string;
  size: '6xl' | '5xl' | '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  children?: ReactNode;
};

export default {
  title: 'chakra-ui-styled/components/disclosure/accordion',
  component: Accordion,
  parameter: { controls: { expanded: true } },

  argTypes: {
    size: { control: { type: 'select', options: ['6xl', '5xl', '4xl', '3xl', '2xl', 'xl', 'lg', 'md', 'sm', 'xs'] } },
    state: { control: { type: 'boolean' } },
    title: { control: { type: 'text' } },
    text: { control: { type: 'text' } },
    arg: {
      size: '',
      state: true,
      title: 'title',
      text: 'text'
    }
  }
};

export const AccordionComponent = (args: AccordionType) => {
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
const Container = styled.div``;

AccordionComponent.storyName = 'Accordion';
