import styled from 'styled-components';
import { HeadingProps } from './typography.types'

export const Heading = ({As,value,Size}:HeadingProps) =>{

const HeadingElement = styled.h1<{value:HeadingProps['value'],Size:HeadingProps['Size']}>`
font-size: ${({value,Size})=>{
if(Size === 'large') {
  if(value === '4xl'){
    return '72px';
  } else if(value === '3xl'){
    return '60px';
  } else if(value === '2xl'){
    return '48px';
  } else if(value === 'xl'){
    return '36px';
  } else if(value === 'lg'){
    return '30px';
  } else if(value === 'md'){
    return '20px';
  } else if(value === 'sm'){
    return '16px';
  } else if(value === 'xs'){
    return '14px';
  }

} else if (Size ==='small'){
  if(value === '4xl'){
    return '60px';
  } else if(value === '3xl'){
    return '48px';
  } else if(value === '2xl'){
    return '36px';
  } else if(value === 'xl'){
    return '30px';
  } else if(value === 'lg'){
    return '24px';
  } else if(value === 'md'){
    return '20px';
  } else if(value === 'sm'){
    return '16px';
  } else if(value === 'xs'){
    return '14px';
  }
}
}};
`;
const text = "In love with Chakra";
  return (
      <>
        <p>{ value }</p>
        <HeadingElement value={value} Size={Size} as={As}>
          { text }
        </HeadingElement>
      </>
  )
}
