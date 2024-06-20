import { AccordionType } from './Accordion.stories';
import { createContext, ReactNode, useContext, useEffect, useReducer, useState } from 'react';
import styled, { css } from 'styled-components';
import { BaseText, TextProps } from '../../../foundation/typography/Text';
import { text } from '../../../foundation/typography/typography';

const AccordionContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  title: '',
  text: '',
  size: 'md'
});

const Accordion = ({ state, children, size, title, text }: AccordionType) => {
  // const [isOpen, setIsOpen] = useState(state);
  // boolean useReducer 이용하여 관리,
  const [isOpen, setIsOpen] = useReducer((state) => !state, state);
  const providerValue = {
    isOpen,
    setIsOpen,
    title,
    size,
    text
  };

  // 스토리북 arg 작동을 위한 useEffect
  useEffect(() => {
    setIsOpen();
  }, [state]);

  return (
    <AccordionContext.Provider value={providerValue}>
      <Container>{children}</Container>
    </AccordionContext.Provider>
  );
};

const Toggle = ({ children }: { children?: ReactNode }) => {
  const { isOpen, setIsOpen, title, size } = useContext(AccordionContext);
  return (
    <div onClick={setIsOpen}>
      {/*isOpen 통해 svg 방향 바꿈*/}
      <TitleBox isOpen={isOpen}>
        <h5>{title}</h5>
        <div>
          {/* 아이콘 */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z" fill="black" />
          </svg>
        </div>
      </TitleBox>
      <BaseText size={size as TextProps['size']}>{children}</BaseText>
    </div>
  );
};

const Panel = () => {
  const { isOpen, text } = useContext(AccordionContext);

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

//
//
//
//TODO : 디자인시스템 css 바꾸기
