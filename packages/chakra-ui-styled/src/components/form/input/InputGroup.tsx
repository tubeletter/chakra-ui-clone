import React from 'react';

import Input, { InputType } from './Input';
import { InputAddon } from './InputAddon';
import { InputGroupStyle } from './InputGroup.styled';

export type InputSize = 'xs' | 'sm' | 'md' | 'lg';
export type VariantType = 'outline' | 'filled' | 'flushed';
export type colorType = 'blue' | 'gray' | 'teal' | 'red' | 'orange' | 'yellow' | 'pink' | 'purple' | 'green';

export type CommonInputType = {
  $size: InputSize;
  $variant?: VariantType;
  $isInvalid: boolean;
  disabled: boolean;
  readOnly: boolean;
};

export type InputGroupType = CommonInputType &
  InputType & {
    leftAddon?: React.ReactElement;
    rightAddon?: React.ReactElement;
  };

// Root Provider
export const InputGroup = ({
  $size,
  $isInvalid,
  disabled,
  readOnly,
  leftAddon,
  rightAddon,
  ...rest
}: InputGroupType) => {
  return (
    <InputGroupStyle $props={{ $size, disabled, readOnly, $isInvalid, leftAddon, rightAddon, ...rest }}>
      {leftAddon && leftAddon}
      <Input
        {...rest}
        disabled={disabled}
        readOnly={readOnly}
        $size={$size}
        $variant={'outline'}
        $isInvalid={$isInvalid}
      />
      {rightAddon && rightAddon}
    </InputGroupStyle>
  );
};

InputGroup.leftAddon = InputAddon;
InputGroup.rightAddon = InputAddon;

export default InputGroup;
