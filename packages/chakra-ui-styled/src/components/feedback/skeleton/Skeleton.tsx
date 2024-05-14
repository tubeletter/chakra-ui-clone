import styled from 'styled-components';
import React from 'react';
import { skeletonType } from './Skeleton.stories';

const Skeleton = ({ isLoading, children }: skeletonType) => {
  return <SkeletonTheme>{children}</SkeletonTheme>;
};

const SkeletonTheme = styled.div`
  @keyframes gradientShift {
    0% {
      background: linear-gradient(90deg, #e2e8f0 0%, #edf2f7 100%);
    }
    50% {
      background: linear-gradient(90deg, #edf2f7 0%, #e2e8f0 100%);
    }
    100% {
      background: linear-gradient(90deg, #e2e8f0 0%, #edf2f7 100%);
    }
  }

  & .skeleton-circle {
    animation: gradientShift 5s infinite;
    border-radius: 9999px;
  }
  & .skeleton-text {
    animation: gradientShift 5s infinite;
    border-radius: 2px;
    height: 8px;
    align-self: stretch;
  }
  & .skeleton-image {
    animation: gradientShift 5s infinite;
    border-radius: 4px;
  }
`;
export default Skeleton;
