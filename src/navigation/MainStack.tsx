import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { NavStackParams, Screen } from './appNavigation.type';
import { HomeScreen, MapScreen } from '../screens';

const Main = createNativeStackNavigator<NavStackParams>();

const screenOptions: NativeStackNavigationOptions = {
  animation: 'slide_from_right',
  headerShown: false,
};

export const MainStack = () => {
  return (
    <Main.Navigator
      screenOptions={{ ...screenOptions, headerShown: false }}
      initialRouteName={Screen.HOME}>
      <Main.Screen name={Screen.HOME} component={HomeScreen} />
      <Main.Screen name={Screen.MAP} component={MapScreen} />
    </Main.Navigator>
  );
};
