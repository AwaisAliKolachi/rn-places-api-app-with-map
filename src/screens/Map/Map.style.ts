import { StyleSheet } from 'react-native';
import { Palette } from '../../utils';

export const MapStyles = ({ primaryColor }: Palette) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20,
    },
    map: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    backButtonContainer: {
      margin: 20,
      backgroundColor: primaryColor,
      borderRadius: 50,
      width: 36,
      height: 36,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    backButtonIcon: {
      width: 37,
      height: 37,
    },
  });
