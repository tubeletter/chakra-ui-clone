import styled from 'styled-components';

export interface CloseButtonProps {
  size: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}
const ViewBoxSize = { sm: 24, md: 32, lg: 40 };
const setIcon = (icon: React.ReactNode) => {
  return <figure className="icon">{icon}</figure>;
};
const CloseButtonStyle = styled.div<CloseButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => ViewBoxSize[size]}px;
  height: ${({ size }) => ViewBoxSize[size]}px;
  aspect-ratio: 1;
  cursor: pointer;
`;
const CloseButton = ({ size = 'sm', icon }: CloseButtonProps) => {
  return (
  <CloseButtonStyle size={size}>
    {icon && setIcon(icon)}
  </CloseButtonStyle>
  )
};

export default CloseButton;
