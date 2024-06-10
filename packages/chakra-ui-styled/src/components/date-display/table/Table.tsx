import styled, { css } from 'styled-components';
import { useState } from 'react';
import { ColumnType, RowType, TableType } from './Table.stories';
import { theme } from '../../../styles/ChakraThemeProvider';

const Table = ({ rD, cD, variant }: TableType) => {
  const [columnDefs, setColumnDefs] = useState<ColumnType[]>(cD || []);
  const [rowDatas, setRowData] = useState<RowType[]>(rD || []);

  const titles: string[] = columnDefs.map((columnDef) => columnDef.field);
  return (
    <>
      <Container variant={variant}>
        <HeadingRow>
          {titles.map((title, index) => (
            <TitleColumn key={index}>{title}</TitleColumn>
          ))}
        </HeadingRow>
        {rowDatas.map((rowData, rIndex) => (
          <TableRow key={rIndex}>
            {titles.map((title, cIndex) => (
              <RowData key={cIndex}>{rowData[title]}</RowData>
            ))}
          </TableRow>
        ))}
      </Container>
    </>
  );
};

const Container = styled.article<TableType>`
  padding: 12px;
  border-radius: 12px;
  background-color: white;
  border: 1px solid #e2e8f0;
  font-size: ${({ theme }) => theme.typo.text.xs.fontSize};
  color: ${theme.color.gray[700]};

  ${({ variant, theme }) => {
    switch (variant) {
      case 'unstyled':
        return css`
          border: none;
          ${TableRow} {
            border: none;
          }
        `;
      case 'simple':
        return css`
          ${TableRow} {
            border-bottom: 1px solid ${theme.color.gray['200']};
            &:last-child {
              border: none;
            }
          }
        `;
      case 'striped':
        return css`
          ${TableRow}:nth-child(even) {
            background-color: ${theme.color.gray['100']};
          }
        `;
      default:
        return css``;
    }
  }}
`;
const HeadingRow = styled.section`
  &:first-child {
    font-weight: ${({ theme }) => theme.typo.fontWeight.bold};
  }
  display: flex;
`;
const TableRow = styled.section`
  display: flex;
  padding: 16px 24px;
`;
const TitleColumn = styled.div`
  flex: 1;
  padding: 16px 24px;
`;

const RowData = styled.div`
  flex: 1;
  font-size: ${({ theme }) => theme.typo.text.sm.fontSize};

  &:first-child {
    font-weight: ${({ theme }) => theme.typo.fontWeight.medium};
  }
`;
// accent : font medium : regular
export default Table;
