import styled from 'styled-components';
import BreadCrumbs, { BreadCrumbsType, colorSchemeType } from './BreadCrumbs';

export default {
  title: 'chakra-ui-styled/components/navigation/BreadCrumb',
  component: BreadCrumbs,
  parameters: { controls: { expanded: true } },

  argTypes: {
    variant: { control: { type: 'select' }, options: ['slash', 'arrow', 'dash'] },
    $colorScheme: {
      control: { type: 'select' },
      options: ['blue', 'gray', 'teal', 'red', 'orange', 'yellow', 'pink', 'purple', 'green']
    }
  },
  args: {
    variant: 'arrow',
    pages: [
      { title: 'Home', href: '/', current: false },
      { title: 'Link1', href: '/', current: false },
      { title: 'Link2', href: '/', current: false },
      { title: 'Current', href: '/', current: true }
    ]
  }
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const BreadCrumbsIndex = (args: BreadCrumbsType) => {
  const pages = [
    { title: 'Home', href: '/', current: false },
    { title: 'Link1', href: '/', current: false },
    { title: 'Link2', href: '/', current: false },
    { title: 'Current', href: '/', current: true }
  ];
  return (
    <Wrapper>
      <h1>BreadCrumb</h1>

      <h2>BreadCrumb Demo</h2>
      <div>
        <BreadCrumbs {...args} />
      </div>

      <h2>BreadCrumb Index</h2>

      <div>
        <BreadCrumbs variant="slash" pages={pages} />
      </div>

      <div>
        <BreadCrumbs variant="dash" pages={pages} />
      </div>

      <div>
        <BreadCrumbs variant="arrow" pages={pages} />
      </div>
    </Wrapper>
  );
};
BreadCrumbsIndex.storyName = 'BreadCrumb';
