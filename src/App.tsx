import * as React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { Global } from '@emotion/react';

import { Home } from './pages/Home';

const Fonts = () => (
  <Global
    styles={
      "@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');"
    }
  />
);

const theme = extendTheme({
  fonts: {
    body: 'Open Sans',
  },
});
export const App = () => (
  <ChakraProvider theme={theme}>
    <Fonts />
    <Home />
  </ChakraProvider>
);
