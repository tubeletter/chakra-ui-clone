import Table from './Table';
import { progressType } from '../../feedback/progress/Progress.stories';

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
  rD: RowType[];
  cD: ColumnType[];
  variant: 'unstyled' | 'striped' | 'simple';
};
export default {
  title: 'chakra-ui-styled/components/feedback/table',
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
      <h2>Demo</h2>
      <Table {...args} />
      <div>
        <Table rD={rowDatas} cD={columnDefs} variant={'unstyled'} />
        <Table rD={rowDatas} cD={columnDefs} variant="simple" />
        <Table rD={rowDatas} cD={columnDefs} variant={'striped'} />
      </div>
    </>
  );
};

TableIndex.storyName = 'Table';
