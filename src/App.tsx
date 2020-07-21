import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';
import ToastContainer from './components/ToastContainer';

import { AuthProvider } from './hooks/AuthContext';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const App = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <ToastContainer />
    <GlobalStyle />
  </>
);

export default App;
