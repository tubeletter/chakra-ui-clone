import { accordionType } from './Accordion.stories';
import { createContext, ReactNode, useContext, useState } from 'react';
import styled, { css } from 'styled-components';
import { Containers } from '../../../foundation/containers/container';

const AccordionContext = createContext({
  isOpen: false,
  setIsOpen: (value: boolean) => {}
});

const Accordion = ({ state, children }: accordionType) => {
  const [isOpen, setIsOpen] = useState(state);
  const providerValue = {
    isOpen,
    setIsOpen
  };
  return (
    <AccordionContext.Provider value={providerValue}>
      <Container>{children}</Container>
    </AccordionContext.Provider>
  );
};

const Toggle = ({ title, children }: { title: string; children?: ReactNode }) => {
  const { isOpen, setIsOpen } = useContext(AccordionContext);

  return (
    <div onClick={() => setIsOpen(!isOpen)}>
      <TitleBox isOpen={isOpen}>
        <h5>{title}</h5>
        <div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z" fill="black" />
          </svg>
        </div>
      </TitleBox>
      <p>{children}</p>
    </div>
  );
};

const Panel = ({ text }: { text: string }) => {
  const { isOpen } = useContext(AccordionContext);

  return isOpen && <TextBox>{text}</TextBox>;
};

Accordion.Toggle = Toggle;
Accordion.Panel = Panel;

export default Accordion;

const TitleBox = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  flex: 1;
  width: inherit;
  max-width: 345px;
  user-select: none;
  ${({ isOpen }) =>
    isOpen &&
    css`
      div {
        transform: rotate(180deg);
      }
    `}
`;
const TextBox = styled.div`
  font-size: 16px;
  font-weight: 400;
`;

const Container = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 403px;
  border-block: 1px solid #d0d0d0;
  padding: 10px 12px;
  h5 {
    font-size: 16px;
    font-weight: 400;
  }
  > div {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
`;
