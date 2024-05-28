import Table from './Table';

const columnDefs = [
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
const rowDatas = [
  {
    field: 'one',
    name: 'one',
    kName: '하나'
  },
  {
    field: 'two',
    name: 'two',
    kName: '두'
  },
  {
    field: 'three',
    name: 'three',
    kName: '셋'
  }
];
export type progressType = {
  progress: number;
  size: 'xs' | 'sm' | 'md' | 'lg';
  color: string;
};
export default {
  title: 'chakra-ui-styled/components/feedback/table',
  component: Table,
  parameter: { controls: { expanded: true } },
  argTypes: {},
  arg: {
    columnDefs,
    rowDatas
  }
};

export const TableIndex = (args: progressType) => {
  return (
    <>
      <h2>Demo</h2>
      <Table rD={rowDatas} cD={columnDefs} />
    </>
  );
};

TableIndex.storyName = 'Table';
