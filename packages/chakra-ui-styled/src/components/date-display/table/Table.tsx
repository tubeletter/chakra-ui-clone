import styled from 'styled-components';

type tableProps = {
  variant: 'simple' | 'striped' | 'unstyled';
};
const Table = ({ variant, color }) => {
  return (
    <>
      <Container>
        <HeadingRow>
          <TitleColumn></TitleColumn>
        </HeadingRow>
        <TableRow>
          <ContentsColumn></ContentsColumn>
        </TableRow>
      </Container>
    </>
  );
};

const Container = styled.article`
  padding: 12px;
  border-radius: 12px;
  background-color: white; // white
  border: 1px solid #e2e8f0;
  section {
    border-bottom: 1px solid #e2e8f0; // gray/200
  }
`;
const HeadingRow = styled.section`
  display: flex;
`;
const TableRow = styled.section`
  display: flex;
`;
const TitleColumn = styled.div`
  flex: 1;
`;

const ContentsColumn = styled.div`
  flex: 1;
`;
// accent : font medium : regular
export default Table;
