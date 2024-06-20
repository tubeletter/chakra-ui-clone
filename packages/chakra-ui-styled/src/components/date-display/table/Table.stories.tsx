import Table from './Table';
import { progressType } from '../../feedback/progress/Progress.stories';
import styled from 'styled-components';

export type ColumnType = { field: string };
export type RowType = { [key: string]: string };
const columnDefs: ColumnType[] = [
  {
    field: 'one'
  },
  {
    field: 'kName'
  },
  {
    field: 'name'
  }
];
const rowDatas: RowType[] = [
  {
    one: 'one',
    name: 'one',
    kName: '하나'
  },
  {
    one: 'two',
    name: 'two',
    kName: '두'
  },
  {
    one: 'three',
    name: 'three',
    kName: '셋'
  }
];
export type TableType = {
  rD?: RowType[];
  cD?: ColumnType[];
  variant: 'unstyled' | 'striped' | 'simple';
};
export default {
  title: 'chakra-ui-styled/components/date-display/table',
  component: Table,
  parameter: { controls: { expanded: true } },
  argTypes: {},
  arg: {
    columnDefs,
    rowDatas,
    variant: 'unstyled'
  }
};

export const TableIndex = (args: TableType) => {
  return (
    <>
      <Container>
        <h2>Demo</h2>
        <Table {...args} />
        <hr />
        <Table rD={rowDatas} cD={columnDefs} variant="unstyled" />
        <Table rD={rowDatas} cD={columnDefs} variant="simple" />
        <Table rD={rowDatas} cD={columnDefs} variant="striped" />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #eee;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
TableIndex.storyName = 'Table';
