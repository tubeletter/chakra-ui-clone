import { CommonInputType } from './InputGroup';
import { InputStyle } from './Input.styled';

export type InputType = CommonInputType & {
  type?: 'text' | 'email' | 'tel' | 'password';
  name: string;
  id: string;
  placeholder?: string;
};

// input
const Input = ({
  $size = 'xs',
  $isInvalid = false,
  $variant = 'filled',
  readOnly = false,
  disabled = false,
  placeholder = 'placeholder',
  ...rest
}: InputType) => {
  return (
    <InputStyle
      $props={{ $variant, $isInvalid, $size, readOnly, disabled }}
      disabled={disabled}
      readOnly={readOnly}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default Input;
