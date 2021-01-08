import * as React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { GlobalWrapper } from './store/store';

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
    <Router>
      <GlobalWrapper>
        <Fonts />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/:region' component={Home} />
        </Switch>
        {/* <Home /> */}
      </GlobalWrapper>
    </Router>
  </ChakraProvider>
);
