import React from 'react';
import { NavigationContainerRef } from '@react-navigation/native';
import { NavStackParams } from './appNavigation.type';
import { MainStack } from './MainStack';

export const navigationRef =
  React.createRef<NavigationContainerRef<NavStackParams>>();

export const AppNavigation = () => {
  return <MainStack />;
};
