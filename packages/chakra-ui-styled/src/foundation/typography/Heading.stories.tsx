import { Heading } from './Heading';

export default {
  title: 'chakra-ui-styled/foundation/typography/Heading',
  component: Heading,
  argTypes: {
    size: {
      control: {
        type: 'select'
      },
      options: ['small', 'large']
    }
  },
  parameter: {}
};

export const Large = () => {
  return (
    <div>
      <Heading value="4xl" as="h1" size="large" />
      <Heading value="3xl" as="h1" size="large" />
      <Heading value="2xl" as="h2" size="large" />
      <Heading value="xl" as="h2" size="large" />
      <Heading value="lg" as="h3" size="large" />
      <Heading value="md" as="h3" size="large" />
      <Heading value="sm" as="h4" size="large" />
      <Heading value="xs" as="h4" size="large" />
    </div>
  );
};
export const Small = () => {
  return (
    <div>
      <Heading value="4xl" as="h1" size="small" />
      <Heading value="3xl" as="h1" size="small" />
      <Heading value="2xl" as="h2" size="small" />
      <Heading value="xl" as="h2" size="small" />
      <Heading value="lg" as="h3" size="small" />
      <Heading value="md" as="h3" size="small" />
      <Heading value="sm" as="h4" size="small" />
      <Heading value="xs" as="h4" size="small" />
    </div>
  );
};
