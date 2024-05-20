import styled from 'styled-components';
import Tooltip, { TooltipProps, placementType } from './Tooltip';
import { ArrowIconStyle } from './Tooltip.styled';


export default {
  title: 'chakra-ui-styled/components/overlay/tooltip',
  component: Tooltip,
  parameters: { controls: { expanded: true } },

  argTypes: {
    label: { control: { type: 'text' } },
    // placement: { control: { type: 'select' } },
    // 패널이 셀렉트박스가 구현안됨
    placement: { control: { type: 'text' } },
  },
  args: {
    label: 'Hover me',
    placement: 'auto-start',
    arrowIcon: <ArrowIconStyle />,
  }
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Wrap = styled.div`
  display: inline-flex;
  padding: 50px 80px;
`;
const Stack = styled.div`
  padding: 0 80px;
    display: flex;
    flex-flow: row wrap;
    gap: 50px 90px;
    & > div{
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
`;

export const TooltipIndex = (args: TooltipProps) => {
  const placementArr: placementType[] = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-start', 'bottom', 'bottom-end', 'left-start', 'left', 'left-end'];
  return (
    <Wrapper>
      <h1>Tooltip</h1>

      <h2>Tooltip Demo</h2>
      <Wrap>
        <Tooltip {...args} />
      </Wrap>

      <h2>Tooltip Index</h2>
      <Stack>
      {placementArr.map((placement) => (
        <div>
          {placement}
          <Tooltip label='Hover me' placement={placement} arrowIcon={<ArrowIconStyle />} />
        </div>
      ))}
      </Stack>
    </Wrapper>
  );
};
TooltipIndex.storyName = 'Tooltip';
