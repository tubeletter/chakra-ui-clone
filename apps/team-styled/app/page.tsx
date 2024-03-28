'use client';

import { StyledTest } from './StyledTest';
import { Test } from '@chakra/ui-sass/test';
import { ChakraThemeProvider } from '@chakra/ui-styled/ChakraThemeProvider';

export default function Page(): JSX.Element {
  return (
    <main className="">
      <ChakraThemeProvider>
        <StyledTest>안녕하세요.</StyledTest>
        <Test />
      </ChakraThemeProvider>
    </main>
  );
}
