import styled from 'styled-components';

export interface CloseButtonProps {
  size: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  onClick?: () => void;
}
const ViewBoxSize = { sm: 24, md: 32, lg: 40 };
const setIcon = (icon: React.ReactNode) => {
  return <figure className="icon">{icon}</figure>;
};
const CloseButtonStyle = styled.div<CloseButtonProps>`
  width: ${({ size }) => ViewBoxSize[size]}px;
  height: ${({ size }) => ViewBoxSize[size]}px;
  aspect-ratio: 1;
  cursor: pointer;
`;
const CloseButton = ({ size = 'sm', icon, onClick }: CloseButtonProps) => {
  return (
  <CloseButtonStyle size={size} onClick={onClick}>
    {icon && setIcon(icon)}
  </CloseButtonStyle>
  )
};

export default CloseButton;
