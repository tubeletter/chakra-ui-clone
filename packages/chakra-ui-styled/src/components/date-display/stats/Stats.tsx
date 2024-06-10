import { createContext } from 'react';
import styled, { css } from 'styled-components';
import { StatsType } from './Stats.stories';

const Stats = ({ label, number, text, type = 'none' }: StatsType) => {
  return (
    <Container>
      <StatLabel>{label}</StatLabel>
      <StatNumber>{number}</StatNumber>
      {type === 'increase' && (
        <StatText>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 6.66666L15 11.6667H5L10 6.66666Z" fill="#48BB78" />
          </svg>
          {text}
        </StatText>
      )}
      {type === 'decrease' && (
        <StatText>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 13.3333L5 8.33334H15L10 13.3333Z" fill="#F56565" />
          </svg>
          {text}
        </StatText>
      )}
      {type === 'none' && <StatText>{text}</StatText>}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const StatLabel = styled.p`
  ${({ theme }) => css`
    color: ${theme.color.gray['700']};

    font-size: ${theme.typo.text['sm'].fontSize};
    font-weight: ${theme.typo.text['sm'].fontWeight};
  `}
`;
const StatNumber = styled.p`
  ${({ theme }) => css`
    color: ${theme.color.gray['700']};

    font-size: ${theme.typo.text['2xl'].fontSize};
    font-weight: ${theme.typo.fontWeight.semibold};
  `}
`;
const StatText = styled.p`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-size: ${theme.typo.text['sm'].fontSize};
    font-weight: ${theme.typo.text['sm'].fontWeight};
    color: ${theme.color.gray['700']};
    opacity: 0.8;
  `}
`;

export default Stats;
