import { TextareaStyle } from "./Textarea.style";

export interface TextareaProps {
  isInvalid?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  placeholder: string;
}

const Textarea = ({ placeholder = 'Hello', disabled = false, readOnly = false, isInvalid = false }: TextareaProps) => {
  return <TextareaStyle placeholder={placeholder} disabled={disabled} readOnly={readOnly} isInvalid={isInvalid} />;
};
export default Textarea;
