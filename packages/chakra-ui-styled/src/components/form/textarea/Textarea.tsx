import { TextareaStyle } from "./Textarea.style";

export type colorSchemeType = 'whiteAlpha' | 'blackAlpha' | 'gray' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'cyan' | 'purple' | 'pink' ;
export interface TextareaProps {
  colorScheme: colorSchemeType;
  isInvalid?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  placeholder: string;
}

const Textarea = ({ placeholder = 'Hello', colorScheme, disabled = false, readOnly = false, isInvalid = false }: TextareaProps) => {
  return <TextareaStyle placeholder={placeholder} colorScheme={colorScheme} disabled={disabled} readOnly={readOnly} isInvalid={isInvalid} />;
};
export default Textarea;
