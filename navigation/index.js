import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigation from './AuthNavigation';
import AppNavigation from './AppNavigation';

export default function AppContainer() {
  return (
    <NavigationContainer>
      <AuthNavigation />
      <AppNavigation />
    </NavigationContainer>
  )
}