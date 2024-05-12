import { StylePinInput, PinInputField  } from './PinInput.style';
import { useState, createRef, useEffect } from "react"

export type colorSchemeType = 'whiteAlpha' | 'blackAlpha' | 'gray' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'cyan' | 'purple' | 'pink' ;
export interface PinInputProps {
  size: "xs" | 'sm' | 'md' | 'lg';
  colorScheme: colorSchemeType;
  numOfInputs: number;
}

const PinInput = ({ size = "md", colorScheme, numOfInputs = 4 }: PinInputProps) => {
  const numberOfInputs = numOfInputs;
  const [inputRefsArray] = useState(() =>
    Array.from({ length: numberOfInputs }, () => createRef())
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleKeyPress = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex < numberOfInputs - 1 ? prevIndex + 1 : 0;
      const nextInput = inputRefsArray?.[nextIndex]?.current; //선택적 체이닝 문법 사용
      nextInput.focus();
      return nextIndex;
    });
  };
  useEffect(() => {
    if (inputRefsArray?.[0]?.current) {
      inputRefsArray?.[0]?.current?.focus();
    }

    window.addEventListener("keyup", handleKeyPress, false);
    return () => {
      window.removeEventListener("keyup", handleKeyPress);
    };
  }, []);

  return (
    <StylePinInput size={size} colorScheme={colorScheme}>
      {inputRefsArray.map((ref, index) => {
        return(
          <PinInputField ref={ref}
            onClick={ () => setCurrentIndex(index) }
          />
        )
      })}
    </StylePinInput>
  );
};
export default PinInput;