import styles from './storybook.module.scss';
import { Colors } from './color';

export default {
  title: 'chakra-ui-sass/foundation'
};

export const ColorType = () => {
  return (
    <div className={`${styles.storybook_content} ${styles.color_palette}`}>
      <h2 className="font-lg-lg">Color</h2>
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
