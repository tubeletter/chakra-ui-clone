import styled from 'styled-components';
import Slider, { SliderProps, colorSchemeType } from './Slider';

export default {
  title: 'chakra-ui-styled/components/form/slider',
  component: Slider,
  parameters: { controls: { expanded: true } },

  argTypes: {
    size: { control: { type: 'select' } },
    colorScheme: { control: { type: 'select' } },
    disabled: { control: { type: 'boolean' } },
    readonly: { control: { type: 'boolean' } },
    value: { control: { type: 'number' } },
    min: { control: { type: 'number' } },
    max: { control: { type: 'number' } },
    step: { control: { type: 'number' } },
  },
  args: {
    size: 'sm',
    colorScheme: 'blue',
    disabled: false,
    readonly: false,
    value: 50,
    min: 0,
    max: 100,
    step: 1,
  }
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Stack = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 0;
  gap: 50px;
`;
export const SliderIndex = (args: SliderProps) => {
  const colorArr: colorSchemeType[] = ['whiteAlpha', 'blackAlpha', 'gray', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'cyan', 'purple', 'pink'];
  return (
    <Wrapper>
      <h1>Slider</h1>

      <h2>Slider Demo</h2>
      <div>
        <Slider {...args} />
      </div>

      <h2>Slider Index</h2>
      {colorArr.map((color) => (
        <Stack>
          <Slider aria-label="slider-ex-1" size="sm" colorScheme={color}
            value={50} min={0} max={100} step={1}
            disabled={false} readOnly={false}/>
          <Slider aria-label="slider-ex-1" size="md" colorScheme={color}
            value={50} min={0} max={100} step={1}
            disabled={false} readOnly={false}/>
          <Slider aria-label="slider-ex-1" size="lg" colorScheme={color}
            value={50} min={0} max={100} step={1}
            disabled={false} readOnly={false}/>
          <Slider aria-label="slider-ex-1" size="sm" colorScheme={color}
            value={50} min={0} max={100} step={1}
            disabled={true} readOnly={true}/>
          <Slider aria-label="slider-ex-1" size="md" colorScheme={color}
            value={50} min={0} max={100} step={1}
            disabled={true} readOnly={true}/>
          <Slider aria-label="slider-ex-1" size="lg" colorScheme={color}
            value={50} min={0} max={100} step={1}
            disabled={true} readOnly={true}/>
        </Stack>
      ))}
    </Wrapper>
  );
};
SliderIndex.storyName = 'Slider';
