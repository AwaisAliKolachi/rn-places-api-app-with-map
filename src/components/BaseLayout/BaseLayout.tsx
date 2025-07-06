import React from 'react';
import { StatusBar, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useColor } from '../../context';
import { Palette } from '../../utils';

export type BaseLayoutProps = React.PropsWithChildren & {
  style?: StyleProp<ViewStyle>;
};

export const BaseLayout = React.memo(({ children, style }: BaseLayoutProps) => {
  const { appTheme, color } = useColor();
  const styles = baseLayoutStyles(color);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.safeAreaStyle, style]}>
        <StatusBar
          barStyle={appTheme === 'dark' ? 'light-content' : 'dark-content'}
          backgroundColor={color.backgroundColor}
        />
        {children}
      </SafeAreaView>
    </SafeAreaProvider>
  );
});

export const baseLayoutStyles = ({ backgroundColor }: Palette) =>
  StyleSheet.create({
    safeAreaStyle: {
      backgroundColor: backgroundColor,
      flex: 1,
    },
  });
