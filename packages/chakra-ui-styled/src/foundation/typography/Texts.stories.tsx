import { TextComponent } from './Text';
import { TextProps } from './typography.types';

export default {
  title: 'chakra-ui-styled/foundation/typography/Text',
  component: Text,
  argTypes: {},
  parameter: {}
};
export const Texts = () => {
  return (
    <div>
      <TextComponent value="6xl" size="storybook" />
      <TextComponent value="5xl" size="storybook" />
      <TextComponent value="4xl" size="storybook" />
      <TextComponent value="3xl" size="storybook" />
      <TextComponent value="2xl" size="storybook" />
      <TextComponent value="xl" size="storybook" />
      <TextComponent value="lg" size="storybook" />
      <TextComponent value="md" size="storybook" />
      <TextComponent value="sm" size="storybook" />
      <TextComponent value="xs" size="storybook" />
    </div>
  );
};
export const Regular = () => {
  const commonProps: { size: TextProps['size'] } = {
    size: 'regular'
  };
  return (
    <div>
      <TextComponent value="6xl" {...commonProps} />
      <TextComponent value="5xl" {...commonProps} />
      <TextComponent value="4xl" {...commonProps} />
      <TextComponent value="3xl" {...commonProps} />
      <TextComponent value="2xl" {...commonProps} />
      <TextComponent value="xl" {...commonProps} />
      <TextComponent value="lg" {...commonProps} />
      <TextComponent value="md" {...commonProps} />
      <TextComponent value="sm" {...commonProps} />
      <TextComponent value="xs" {...commonProps} />
    </div>
  );
};

export const Medium = () => {
  const commonProps: { size: TextProps['size'] } = {
    size: 'medium'
  };
  return (
    <div>
      <TextComponent value="6xl" {...commonProps} />
      <TextComponent value="5xl" {...commonProps} />
      <TextComponent value="4xl" {...commonProps} />
      <TextComponent value="3xl" {...commonProps} />
      <TextComponent value="2xl" {...commonProps} />
      <TextComponent value="xl" {...commonProps} />
      <TextComponent value="lg" {...commonProps} />
      <TextComponent value="md" {...commonProps} />
      <TextComponent value="sm" {...commonProps} />
      <TextComponent value="xs" {...commonProps} />
    </div>
  );
};
export const Semibold = () => {
  const commonProps: { size: TextProps['size'] } = {
    size: 'semibold'
  };
  return (
    <div>
      <TextComponent value="6xl" {...commonProps} />
      <TextComponent value="5xl" {...commonProps} />
      <TextComponent value="4xl" {...commonProps} />
      <TextComponent value="3xl" {...commonProps} />
      <TextComponent value="2xl" {...commonProps} />
      <TextComponent value="xl" {...commonProps} />
      <TextComponent value="lg" {...commonProps} />
      <TextComponent value="md" {...commonProps} />
      <TextComponent value="sm" {...commonProps} />
      <TextComponent value="xs" {...commonProps} />
    </div>
  );
};
export const Bold = () => {
  const commonProps: { size: TextProps['size'] } = {
    size: 'bold'
  };
  return (
    <div>
      <TextComponent value="6xl" {...commonProps} />
      <TextComponent value="5xl" {...commonProps} />
      <TextComponent value="4xl" {...commonProps} />
      <TextComponent value="3xl" {...commonProps} />
      <TextComponent value="2xl" {...commonProps} />
      <TextComponent value="xl" {...commonProps} />
      <TextComponent value="lg" {...commonProps} />
      <TextComponent value="md" {...commonProps} />
      <TextComponent value="sm" {...commonProps} />
      <TextComponent value="xs" {...commonProps} />
    </div>
  );
};
export const extraBold = () => {
  const commonProps: { size: TextProps['size'] } = {
    size: 'extraBold'
  };
  return (
    <div>
      <TextComponent value="6xl" {...commonProps} />
      <TextComponent value="5xl" {...commonProps} />
      <TextComponent value="4xl" {...commonProps} />
      <TextComponent value="3xl" {...commonProps} />
      <TextComponent value="2xl" {...commonProps} />
      <TextComponent value="xl" {...commonProps} />
      <TextComponent value="lg" {...commonProps} />
      <TextComponent value="md" {...commonProps} />
      <TextComponent value="sm" {...commonProps} />
      <TextComponent value="xs" {...commonProps} />
    </div>
  );
};
