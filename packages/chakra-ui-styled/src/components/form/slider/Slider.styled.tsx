import styled, { css } from 'styled-components';
import { SliderProps } from './Slider';

const SliderTrackSize = {
  sm: css`
    height: 2px;
    border-radius: 2px;
  `,
  md: css`
    height: 4px;
    border-radius: 4px;
  `,
  lg: css`
    height: 4px;
    border-radius: 4px;
  `,
};
const SliderThumbSize = { sm: 10, md: 14, lg: 16 };
export const StyleSlider = styled.div<SliderProps>`
  display: flex;
  align-items: center;
  flex: 1 1 30%;
  position: relative;
  height: ${({ size }) => SliderThumbSize[size]}px;
  & input[type="range"]{
    &::-webkit-slider-thumb{
      width: ${({ size }) => SliderThumbSize[size]}px;
    }
  }
  & .sliderTrack{
    ${({ size }) => SliderTrackSize[size]}
  }
  & .sliderFilledTrack{
    ${({ size }) => SliderTrackSize[size]}
    width: 50%;
  }

  ${({ value, disabled, readOnly, colorScheme, theme }) => css`
    & input[type="range"]{
      &::-webkit-slider-thumb{
        left: ${value}%;
      }
    }
    & .sliderTrack{
      background: ${theme.color.gray[200]};
    }
    & .sliderFilledTrack{
      background: ${theme.color[colorScheme][500]};
      width: ${value}%;
    }
    ${disabled || readOnly
      ? css`
          // 비활성o
          opacity: 0.6;
          & input[type="range"]{
            &::-webkit-slider-thumb{
              background: ${theme.color.gray[300]}
            }
          }
          & .sliderTrack{
            background: ${theme.color.gray[300]};
          }
          & .sliderFilledTrack{
            background: ${theme.color[colorScheme][500]};
          }
        `
      : css``}
  `}
`;
export const SliderThumb = styled.input.attrs({ type: "range" })`
  width:100%;
  appearance: none;
  &::-webkit-slider-thumb{
    appearance: none;
    aspect-ratio: 1;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.06), 0px 1px 3px 0px rgba(0,0,0,0.1);
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
  
`;
export const SliderTrack = styled.div`
  &.sliderTrack{
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
`;
export const SliderFilledTrack = styled.div`
  &.sliderFilledTrack{
    position: absolute;
    top: 0;
  }
`;

