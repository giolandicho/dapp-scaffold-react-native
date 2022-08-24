import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './providers/AuthProvider';

import Navigator from './Navigator';

export const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <AuthProvider>
        <NavigationContainer>
          <Navigator/>
        </NavigationContainer>
      </AuthProvider>
    </>
  );
};

export default App;
