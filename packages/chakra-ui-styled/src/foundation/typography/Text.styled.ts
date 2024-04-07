import styled from 'styled-components';
import { TextProps } from './typography.types';
import { text } from './typography';
// value 폰트 크기 size 폰트 굵기
export const TextComponent = styled.p<TextProps>`
  font-weight: ${({ size }) => text[size]?.fontWeight}
  font-size: ${({ size, value }) => text[size]?.[value]?.fontSize}
  line-height: ${({ value }) => text[size]?.[value]?.lineHeight};
`;
// medium: {
//   fontWeight: '500',
//       fontFamily: 'Pretendard Variable',
//       '6xl': {
//     fontSize: '60px',
//         lineHeight: '60px'
//   },
// text[size]?.fontWeight
// text[size]?.[value]?.fontSize
// text[size]?.[value]?.lineHeight
