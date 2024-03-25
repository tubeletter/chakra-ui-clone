import { ThemeProvider } from 'styled-components';
import themes from '@chakra/ui-styled/theme';
import { Test } from '@chakra/ui-styled/test';

export default function Page(): JSX.Element {
  return (
    <ThemeProvider theme={themes}>
      <main className="">
        <Test />
      </main>
    </ThemeProvider>
  );
}
