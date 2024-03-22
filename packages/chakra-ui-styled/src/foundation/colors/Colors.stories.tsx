import Colors from './Colors';
import { colorPalette } from './colorPalette';

export default {
  title: 'chakra-ui-styled/foundation/Colors',
  component: Colors,
  argTypes: {},
  parameter: {}
};

export const Color = () => {
  return (
    <>
      {Object.keys(colorPalette).map((v, i) => {
        return (
          <div key={i}>
            <p>{v}</p>
            {}
          </div>
        );
      })}
    </>
  );
};
Color.storyName = 'Colors';
