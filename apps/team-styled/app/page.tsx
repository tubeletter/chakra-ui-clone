'use client';

import { StyledTest } from './StyledTest';
import { Test } from '@chakra/ui-styled/test';
import { ChakraThemeProvider } from '@chakra/ui-styled/ChakraThemeProvider';

export default function Page(): JSX.Element {
  return (
    <main>
      <ChakraThemeProvider>
        <Test />
      </ChakraThemeProvider>
    </main>
  );
}
