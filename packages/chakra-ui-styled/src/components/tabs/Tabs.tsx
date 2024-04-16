import styled from 'styled-components';
import Tab from './tab/Tab';

const Container = styled.div`
  display: flex;
`;
const Tabs = () => {
  return (
    <Container>
      <Tab size="sm" style="unstyled" active={true}></Tab>
      <Tab size="sm" style="unstyled" active={false}></Tab>
      <Tab size="sm" style="unstyled" active={false}></Tab>
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
