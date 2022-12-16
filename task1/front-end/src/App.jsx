import React, { useContext, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import AppRouter from 'routes/AppRouter';

import { CurrentUserContext } from 'context/AppProvider';

import theme from 'styles/customTheme';
import 'App.scss';

const App = () => {
  const { fetchUser } = useContext(CurrentUserContext);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppRouter />
      </div>
    </ThemeProvider>
  );
};

export default App;
