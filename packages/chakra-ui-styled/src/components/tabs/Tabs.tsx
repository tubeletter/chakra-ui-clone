import styled, { css } from 'styled-components';
import Tab from './tab/Tab';

const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    > div {
      border-bottom: 2px solid ${theme.color.gray[200]};
    }
  `}
`;
const Tabs = () => {
  return (
    <Container>
      <h2>Unstyled_Tabs</h2>
      <Tab size="sm" style="unstyled" active={true} />
      <Tab size="sm" style="unstyled" active={false} />
      <Tab size="sm" style="unstyled" active={false} />
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
