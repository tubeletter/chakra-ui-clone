import styled, { css } from 'styled-components';
import { colorType } from './InputGroup';

export type InputAddonType = {
  $color?: colorType;
  $bg?: colorType;
  dataPosition?: 'left' | 'right';
  $element: React.ReactNode;
};
export const AddonStyle = styled.figure<InputAddonType>`
  ${({ $color, $bg, theme }) => css`
    color: ${$color ? theme.color[$color][500] : theme.color.black.black};
    background-color: ${$bg ? theme.color[$bg][100] : 'transparent'};
  `}
`;
