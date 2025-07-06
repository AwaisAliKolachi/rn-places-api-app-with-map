import { GoogleLocationDetailResult } from '@appandflow/react-native-google-autocomplete';
import type { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export enum Screen {
  HOME = 'HOME',
  MAP = 'MAP',
}

export type NavStackParams = {
  [Screen.HOME]: undefined;
  [Screen.MAP]: MapScreenParams;
};

export type MapScreenParams = {
  place: GoogleLocationDetailResult;
};

export type AppNavigationProp = NativeStackNavigationProp<NavStackParams>;

export type MapRoute = RouteProp<NavStackParams, Screen.MAP>;
