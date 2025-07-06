import { ColorSchemeName } from 'react-native';

export const color = {
  dark: {
    backgroundColor: '#1e1e1e',
    primaryColor: '#82aaff',
    secondaryColor: '#3c3c3c',
    textColor: '#eaeaea',
    textLight: '#1e1e1e',
    textPlaceholer: '#a0a0a0',
  },
  light: {
    backgroundColor: '#f4f4f4',
    primaryColor: '#3366cc',
    secondaryColor: '#e0e0e0',
    textColor: '#2e2e2e',
    textLight: '#ffffff',
    textPlaceholer: '#a0a0a0',
  },
};

export type Palette = (typeof color)[keyof typeof color];
export type Theme = ColorSchemeName | keyof typeof color;
