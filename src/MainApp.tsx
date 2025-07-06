import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { AppNavigation, navigationRef } from './navigation/AppNavigation';
import store, { persistor } from './store';
import { ThemeProvider } from './context';

export const MainApp = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <NavigationContainer ref={navigationRef}>
          <PersistGate loading={null} persistor={persistor}>
            <AppNavigation />
          </PersistGate>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};
