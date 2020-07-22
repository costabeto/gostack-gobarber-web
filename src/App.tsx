import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';

import AppProvider from './hooks';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const App = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>

    <GlobalStyle />
  </>
);

export default App;
