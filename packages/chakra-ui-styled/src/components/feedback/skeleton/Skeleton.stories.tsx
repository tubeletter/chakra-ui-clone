import Skeleton from './Skeleton';
import { ReactNode } from 'react';

export type skeletonType = {
  isLoading: boolean;
  children?: ReactNode;
};
export default {
  title: 'chakra-ui-styled/components/feedback/skeleton',
  component: Skeleton,
  parameter: { controls: { expanded: true } },
  argTypes: {
    isLoading: {
      control: {
        type: 'boolean'
      }
    }
  },
  arg: {
    isLoading: true
  }
};

export const SkeletonIndex = (args: skeletonType) => {
  return (
    <>
      <h2>Demo</h2>
      <Skeleton {...args}>
        <div className="skeleton-circle" />
        <div className="skeleton-image" />
        <p className="skeleton-text" />
        <p className="skeleton-text" />
        <p className="skeleton-text" />
      </Skeleton>
      <br />
      <Skeleton isLoading={true}>
        <h2>.skeleton-text</h2>
        <div className="skeleton-text" />
        <div className="skeleton-text" />
        <div className="skeleton-text" />
        <h2>.skeleton-image</h2>
        <div className="skeleton-image" />

        <h2>.skeleton-circle</h2>
        <div className="skeleton-circle" />
      </Skeleton>
    </>
  );
};

SkeletonIndex.storyName = 'Skeleton';
