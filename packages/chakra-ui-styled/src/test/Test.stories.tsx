import { Test } from './Test';

export default {
  title: 'chakra-ui-styled/components/Test',
  parameters: {
    viewport: { defaultViewport: 'mobile_360' }
  }
};

export const Test2 = () => {
  return <Test />;
};
Test2.storyName = '테스트';
