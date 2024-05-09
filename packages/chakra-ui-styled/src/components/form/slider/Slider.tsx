import { StyleSlider, SliderThumb, SliderTrack, SliderFilledTrack } from './Slider.styled';
import { ChangeEvent, useState } from "react"

export type InputValue = string | number | ReadonlyArray<string>
export type InputChangeEvent = ChangeEvent<HTMLInputElement>;
export type colorSchemeType = 'whiteAlpha' | 'blackAlpha' | 'gray' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'cyan' | 'purple' | 'pink' ;
export interface SliderProps {
  size: 'sm' | 'md' | 'lg';
  colorScheme: colorSchemeType;
  disabled?: boolean;
  readOnly?: boolean;
  value: InputValue;
  min: number;
  max: number;
  step: number;
  onChange?: (e: InputChangeEvent) => void;
}
let ariaLabel = 'slider-ex-1' as const;
const Slider = ({ size = 'md', colorScheme, value, min, max, step, disabled = false, readOnly = false, onChange }: SliderProps) => {
  const [inputValue, setInputValue] = useState<InputValue>(value);
  const changeHandler = (e: InputChangeEvent) => {
      setInputValue(e.target.value);
      onChange && onChange(e) // optional로 인한 코드 
  }
  return (
    <StyleSlider aria-label={ariaLabel} size={size} colorScheme={colorScheme}
      value={inputValue} min={min} max={max} step={step}
      disabled={disabled} readOnly={readOnly} >
      <SliderTrack className="sliderTrack">
        <SliderFilledTrack className="sliderFilledTrack"/>
      </SliderTrack>
      <SliderThumb value={inputValue} onChange={changeHandler}/>
    </StyleSlider>
  );
};
export default Slider;