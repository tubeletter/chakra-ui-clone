import styled, { css } from 'styled-components';

const BoxSM = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings[4]} ${theme.spacings[1]};
    background-color: transparent;
  `}
`;
const BoxMD = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings[4]} ${theme.spacings[2]};
    background-color: transparent;
  `}
`;
const BoxLG = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings[4]} ${theme.spacings[3]};
    background-color: transparent;
  `}
`;
const UnstyledSM = styled(BoxSM)`
  border: none;
  background-color: transparent;
`;
const UnstyledMD = styled(BoxMD)`
  border: none;
  background-color: transparent;
`;
const UnstyledLG = styled(BoxLG)`
  border: none;
  background-color: transparent;
`;
const LineSM = styled(BoxSM)`
  ${({ theme }) => css`
    border-bottom: 2px solid ${theme.color.blue[600]};
    color: ${theme.color.blue[600]};
  `}
`;
const LineMD = styled(BoxMD)`
  ${({ theme }) => css`
    border-bottom: 2px solid ${theme.color.blue[600]};
    color: ${theme.color.blue[600]};
  `}
`;
const LineLG = styled(BoxLG)`
  ${({ theme }) => css`
    border-bottom: 2px solid ${theme.color.blue[600]};
    color: ${theme.color.blue[600]};
  `}
`;

const EnclosedSM = styled(BoxSM)`
  ${({ theme }) => css`
    border-radius: ${theme.radii.md} ${theme.radii.md} 0rem 0rem;
    background-color: ${theme.color.white.white};
    border-top: ${theme.spacings.px} solid ${theme.color.gray[200]};
    border-left: ${theme.spacings.px} solid ${theme.color.gray[200]};
    border-right: ${theme.spacings.px} solid ${theme.color.gray[200]};
    color: ${theme.color.blue[600]};
  `}
`;
const EnclossedMD = styled(BoxMD)`
  ${({ theme }) => css`
    border-radius: ${theme.radii.md} ${theme.radii.md} 0rem 0rem;
    background-color: ${theme.color.white.white};
    border-top: ${theme.spacings.px} solid ${theme.color.gray[200]};
    border-left: ${theme.spacings.px} solid ${theme.color.gray[200]};
    border-right: ${theme.spacings.px} solid ${theme.color.gray[200]};
    color: ${theme.color.blue[600]};
  `}
`;
const EnclosedLG = styled(BoxLG)`
  ${({ theme }) => css`
    border-radius: ${theme.radii.md} ${theme.radii.md} 0rem 0rem;
    background-color: ${theme.color.white.white};
    border-top: ${theme.spacings.px} solid ${theme.color.gray[200]};
    border-left: ${theme.spacings.px} solid ${theme.color.gray[200]};
    border-right: ${theme.spacings.px} solid ${theme.color.gray[200]};
    color: ${theme.color.blue[600]};
  `}
`;

const SoftRoundedSM = styled(BoxSM)`
${({ theme }) => css`
  border-radius: 9999px;
  background-color: ${theme.color.blue[100]};
  color: ${theme.color.blue[700]};
`}}
`;

const SolidRoundedSM = styled(BoxSM)`
${({ theme }) => css`
  border-radius: 9999px;
  background-color: ${theme.color.blue[600]};
  color: ${theme.color.white.white};
`}}`;

// TODO
// size = sm md lg  프롭스로 전달 후
// {({size))=> size === 'sm' && } 식으로 작업하여 동적 작업하기.
const Tab = () => {
  //rounded = fsz  semibold 그외 medium

  const text = 'Tabs';
  return (
    <>
      <div>
        <UnstyledSM>{text}</UnstyledSM>
        <LineSM>{text}</LineSM>
        <EnclosedSM>{text}</EnclosedSM>
        <SoftRoundedSM>{text}</SoftRoundedSM>
        <SolidRoundedSM>{text}</SolidRoundedSM>
      </div>
      <div></div>
    </>
  );
};

export default Tab;
