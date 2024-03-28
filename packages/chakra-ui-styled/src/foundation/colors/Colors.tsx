import styled from 'styled-components';
import { colorProps } from './color.types';
import { colorPalette } from './colorPalette';

const Container = styled.div`
  display: flex;
  margin: 8px;
`;

const Title = styled.div`
  margin-left: 16px;
  height: 48px;
  display: flex;
  align-items: center;
  gap: 16px;
  p:first-child {
    font-weight: 700;
  }
  p:last-child {
    font-weight: 400;
    font-size: 14px;
  }
`;

const Colors = ({ colorCode, color, number }: colorProps) => {
  // colorPalette.colorCode 형태로 가져와 styled 로 동적 적용
  // ex ) colorPalette.black.black : '#000'
  // ex ) colorPalette.색상[50]: '#E6FFFA',

  // color 이름이 black , white 일 경우 bgc 가 colorPalette.black.black;
  // 그 외 경우 colorPalette.색상[50]
  // testgit a
  let bgc: string = colorPalette[color as keyof typeof colorPalette][number as keyof (typeof colorPalette)[number]];
  const ColorElement = styled.div`
    background-color: ${bgc};

    width: 48px;
    height: 48px;
    border-radius: 4px;
  `;
  return (
    <Container>
      <ColorElement />
      <Title>
        <p>{colorCode}</p>
        <p>{bgc}</p>
      </Title>
    </Container>
  );
};

export default Colors;
