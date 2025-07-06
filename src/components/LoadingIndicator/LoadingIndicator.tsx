import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { useColor } from '../../context';
import { Palette } from '../../utils';

export interface LoadingIndicatorProps {
  isLoading: boolean;
}

export const LoadingIndicator = (
  { isLoading = false }: LoadingIndicatorProps,
) => {
  const { color } = useColor();
  const styles = LoadingIndicatorStyles(color);

  if (!isLoading) return <></>;

  return (
    <Pressable onPress={() => { }} style={styles.container}>
      <View style={styles.loaderContainer}>
        <ActivityIndicator
          size={'large'}
          color={color.primaryColor}
          style={styles.loaderStyle}
        />
        <Text>Please wait ...</Text>
      </View>
    </Pressable>
  );
};

export const LoadingIndicatorStyles = ({ backgroundColor }: Palette) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 999999,
      // ...StyleSheet.absoluteFillObject,
    },
    loaderContainer: {
      alignItems: 'center',
      backgroundColor: backgroundColor,
      borderRadius: 10,
      justifyContent: 'center',
      padding: 10,
    },
    loaderStyle: {
      padding: 10,
    },
  });

  return styles;
};
