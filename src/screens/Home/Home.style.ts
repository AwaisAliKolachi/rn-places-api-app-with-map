import { StyleSheet } from 'react-native';
import { Palette } from '../../utils';

export const HomeStyles = ({ primaryColor, textColor, textLight }: Palette) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#fff',
    },
    recentRowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 8,
    },
    recentlyText: {
      fontSize: 16,
      color: textColor,
      fontWeight: '500',
    },
    clearHistoryText: {
      fontSize: 16,
      color: primaryColor,
      fontWeight: '500',
    },
    noHistoryContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    noHistoryText: {
      fontSize: 14,
      color: '#777',
      textAlign: 'center',
    },
  });
