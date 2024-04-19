import styled, { css } from 'styled-components';
import Tab from './tab/Tab';
import { tabType } from './tab/tab.types';

const Container = styled.div`
  ${({ theme }) => css`
    display: flex;

    > div {
      border-bottom: 2px solid ${theme.color.gray[200]};
    }
  `}
`;
// active 를 기본값 null false, true 면 true;
const Tabs = ({ size, styleType, active, text }: tabType) => {
  return (
    <Container>
      <h2>
        size:{size} style:{styleType}
      </h2>
      <Tab text={text} size={size} styleType={styleType} active={active} />
      <Tab text={text} size={size} styleType={styleType} active={active} />
      <Tab text={text} size={size} styleType={styleType} active={active} />
    </Container>
  );
};

// tab atoms 종류
//
// unstyled
// soft-rounded
// solid-rounded
// enclosed
// line
//
// tab 사이즈
//
// lg
// md
// sm
// tabs 종류별 1묶음으로 크기 분류

export default Tabs;
