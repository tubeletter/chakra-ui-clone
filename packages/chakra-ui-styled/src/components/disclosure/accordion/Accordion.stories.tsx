import Accordion from './Accordion';
import styled from 'styled-components';
import { ReactNode } from 'react';

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
    title: { control: { type: 'text' }, description: '제목입니다.' },
    text: { control: { type: 'text' } },
    arg: {
      size: 'md', // 기본 size 값
      state: true, // 기본 state 값
      title: '기본 제목', // 기본 title 문구
      text: '기본 텍스트' // 기본 text 문구
    }
  }
};

export const AccordionComponent = (args: AccordionType) => {
  return (
    <>
      <Container>
        <h2>Accordion Demo</h2>
        <p> 스토리북 설정 </p>
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
