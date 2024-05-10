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

export const InputAddon = ({ $color, $bg, dataPosition, $element }: InputAddonType) => {
  return (
    <AddonStyle dataPosition={dataPosition} $color={$color} $bg={$bg} $element={$element}>
      {$element}
    </AddonStyle>
  );
};
