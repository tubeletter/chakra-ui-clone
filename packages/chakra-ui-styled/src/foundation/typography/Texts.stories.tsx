import { TextComponent } from './Text';

export default {
  title: 'chakra-ui-styled/foundation/typography/Text',
  component: Text,
  argTypes: {},
  parameter: {}
};

export const Texts = () => {
  return (
    <div>
      <TextComponent value="6xl" />
      <TextComponent value="5xl" />
      <TextComponent value="4xl" />
      <TextComponent value="3xl" />
      <TextComponent value="2xl" />
      <TextComponent value="xl" />
      <TextComponent value="lg" />
      <TextComponent value="md" />
      <TextComponent value="sm" />
      <TextComponent value="xs" />
    </div>
  );
};
