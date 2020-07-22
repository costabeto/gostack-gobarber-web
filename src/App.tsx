import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/global';
import AppProvider from './hooks';
import Routes from './routes';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const App = () => (
  <Router>
    <AppProvider>
      <Routes />
    </AppProvider>

    <GlobalStyle />
  </Router>
);

export default App;
