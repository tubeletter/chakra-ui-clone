import style from './color.module.scss';
import { Colors } from './color';

export default {
  title: 'chakra-ui-sass/components/Theme'
};

export const ColorType = () => {
  return (
    <div className={style.color_palette}>
      <Colors title="White & Black" color="white, black" isOnly />
      <Colors title="Black" color="black" isAlpha />
      <Colors title="White" color="white" isAlpha />
      <Colors title="Gray" color="gray" />
      <Colors title="Red" color="red" />
      <Colors title="Orange" color="orange" />
      <Colors title="Yellow" color="yellow" />
      <Colors title="Green" color="green" />
      <Colors title="Teal" color="teal" />
      <Colors title="Blue" color="blue" />
      <Colors title="Cyan" color="cyan" />
      <Colors title="Purple" color="purple" />
      <Colors title="Pink" color="pink" />
    </div>
  );
};

ColorType.storyName = 'Colors';
