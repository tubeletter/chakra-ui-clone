import { InputStyle } from './Input.styled';
import { CommonInputType } from './InputGroup';

export type InputType = CommonInputType & {
  type?: 'text' | 'email' | 'tel' | 'password';
  name: string;
  id: string;
  placeholder?: string;
};

// input
const Input = ({
  type = 'text',
  name,
  id,
  placeholder = 'Placeholder',
  $size = 'xs',
  disabled = false,
  readOnly = false,
  $isInvalid = false,
  $variant = 'filled'
}: InputType) => {
  return (
    <>
      <InputStyle
        type={type}
        name={name}
        id={id}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholder}
        $size={$size}
        $variant={$variant}
        $isInvalid={$isInvalid}
      />
    </>
  );
};

export default Input;
