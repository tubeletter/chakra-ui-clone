import { accordionType } from './Accordion.stories';
import { createContext, ReactNode, useContext, useState } from 'react';

const AccordionContext = createContext({
  isOpen: false,
  setIsOpen: (value: boolean) => {}
});

const Accordion = ({ state, text, children }: accordionType) => {
  const [isOpen, setIsOpen] = useState(state);
  const providerValue = {
    isOpen,
    setIsOpen
  };
  return <AccordionContext.Provider value={providerValue}>{children}</AccordionContext.Provider>;
};

const Toggle = ({ title, children }: { title: string; children: ReactNode }) => {
  const { isOpen, setIsOpen } = useContext(AccordionContext);

  return (
    <div onClick={() => setIsOpen(!isOpen)}>
      <h5>{title}</h5>
      <p>{children}</p>
    </div>
  );
};

const Panel = ({ text }: { text: string }) => {
  const { isOpen } = useContext(AccordionContext);

  return isOpen && <>{text}</>;
};

Accordion.Toggle = Toggle;
Accordion.Panel = Panel;
export default Accordion;
