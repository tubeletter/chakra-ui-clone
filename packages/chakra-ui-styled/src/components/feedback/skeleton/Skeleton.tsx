import styled from 'styled-components';
import { skeletonType } from './Skeleton.stories';

const Skeleton = ({ isLoading, children }: skeletonType) => {
  return isLoading && <SkeletonTheme>{children}</SkeletonTheme>;
};

const SkeletonTheme = styled.div`
  @keyframes gradientShift {
    0% {
      background-position: 0 51%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 51%;
    }
  }

  & .skeleton-circle {
    background: linear-gradient(270deg, #e2e8f0, #ffffff);
    background-size: 400% 400%;
    animation: gradientShift 4s ease infinite;
    border-radius: 9999px;
    width: 51px;
    height: 51px;
    margin: 16px 0;
  }
  & .skeleton-text {
    background: linear-gradient(270deg, #e2e8f0, #ffffff);
    background-size: 400% 400%;
    animation: gradientShift 4s ease infinite;
    width: 447px;
    border-radius: 2px;
    height: 8px;
    align-self: stretch;
    margin: 16px 0;
  }
  & .skeleton-image {
    background: linear-gradient(270deg, #e2e8f0, #ffffff);
    background-size: 400% 400%;
    animation: gradientShift 4s ease infinite;
    border-radius: 4px;
    width: 447px;
    height: 113px;
    margin: 16px 0;
  }
`;
export default Skeleton;
