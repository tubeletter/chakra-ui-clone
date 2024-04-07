import styled from 'styled-components';
import { TextProps } from './typography.types';
import { text } from './typography';
// value 폰트 크기 size 폰트 굵기
export const TextComponent = styled.p<TextProps>`
  font-weight: ${({ size }) =>
    size === 'regular'
      ? text.regular?.fontWeight
      : size === 'medium'
        ? text.medium?.fontWeight
        : size === 'semibold'
          ? text.semibold?.fontWeight
          : size === 'bold'
            ? text.bold?.fontWeight
            : size === 'extraBold'
              ? text.extraBold?.fontWeight
              : text.regular?.fontWeight};
  font-size: ${({ value }) =>
    value === '6xl'
      ? text['value']?.fontSize
      : value === '5xl'
        ? text['value']?.fontSize
        : value === '4xl'
          ? '36px'
          : value === '3xl'
            ? '30px'
            : value === '2xl'
              ? '24px'
              : value === 'xl'
                ? '20px'
                : value === 'lg'
                  ? '18px'
                  : value === 'md'
                    ? '16px'
                    : value === 'sm'
                      ? '14px'
                      : value === 'xs'
                        ? '12px'
                        : '14px'};
  line-height: ${({ value }) =>
    value === '6xl'
      ? '90px'
      : value === '5xl'
        ? '72px'
        : value === '4xl'
          ? '54px'
          : value === '3xl'
            ? '45px'
            : value === '2xl'
              ? '36px'
              : value === 'xl'
                ? '30px'
                : value === 'lg'
                  ? '27px'
                  : value === 'md'
                    ? '24px'
                    : value === 'sm'
                      ? '21px'
                      : value === 'xs'
                        ? '18px'
                        : '21px'};
`;

//  storyBookComponent: {
//     fontWeight: '400',
//     '6xl': {
//       fontSize: '60px',
//       lineHeight: '90px'
//     },
