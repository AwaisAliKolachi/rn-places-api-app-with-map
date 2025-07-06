import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAppContext } from '../../context';
import { Palette } from '../../utils';
import { Icons } from '../../assets/icons';

export type RecenterMapButtonProps = {
  recenterMap: () => void;
};

export const RecenterMapButton = React.memo(
  ({ recenterMap }: RecenterMapButtonProps) => {
    const { color } = useAppContext();
    const styles = RecenterMapButtonStyles(color);

    return (
      <View style={styles.wrapper}>
        <TouchableOpacity
          onPress={() => recenterMap()}
          style={styles.buttonContainer}>
          <Image
            source={Icons.GPS_ICON}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    );
  }
);

const RecenterMapButtonStyles = (color: Palette) =>
  StyleSheet.create({
    wrapper: {
      position: 'absolute',
      top: 180,
      left: 10,
      right: 12,
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
    buttonContainer: {
      backgroundColor: 'white',
      borderRadius: 50,
      width: 50,
      height: 50,
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
    icon: {
      width: 22,
      height: 22,
    },
  });
