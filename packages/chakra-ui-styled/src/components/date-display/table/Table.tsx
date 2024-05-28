import styled from 'styled-components';
import { useState } from 'react';
import { ColumnType, RowType } from './Table.stories';

export type TableType = {
  rD: RowType[];
  cD: ColumnType[];
};
const Table = ({ rD, cD }: TableType) => {
  const [columnDefs, setColumnDefs] = useState<ColumnType[]>(cD || []);
  const [rowDatas, setRowData] = useState<RowType[]>(rD || []);

  const titles: string[] = columnDefs.map((columnDef) => columnDef.field);
  return (
    <>
      <Container>
        <HeadingRow>
          {titles.map((title, index) => (
            <TitleColumn key={index}>{title}</TitleColumn>
          ))}
        </HeadingRow>
        {rowDatas.map((rowData, rIndex) => (
          <TableRow key={rIndex}>
            {titles.map((title, cIndex) => (
              <ContentsColumn key={cIndex}>{rowData[title]}</ContentsColumn>
            ))}
          </TableRow>
        ))}
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
