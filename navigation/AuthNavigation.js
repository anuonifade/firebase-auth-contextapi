import React from 'react';
import "react-native-gesture-handler";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

export default function AuthNavigation() {

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName='Login' headerMode="none">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  )
}