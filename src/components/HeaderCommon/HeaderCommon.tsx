import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAppContext } from '../../context';
import { Palette } from '../../utils';
import { Icons } from '../../assets/icons';

export type HeaderCommonProps = React.PropsWithChildren & {
  title?: string;
  showBack?: boolean;
  onPressBack?: () => void;
  headerRightComponent?: () => React.ReactNode;
  onPressRight?: () => void;
};

export const HeaderCommon = React.memo(
  ({
    title = '',
    showBack = true,
    onPressBack,
    headerRightComponent,
    onPressRight,
  }: HeaderCommonProps) => {
    const { navigation, color } = useAppContext();
    const styles = HeaderCommonStyles(color);

    return (
      <View style={styles.container}>
        {showBack ? (
          <TouchableOpacity
            style={styles.leftButton}
            onPress={onPressBack ? onPressBack : () => navigation?.goBack()}
            hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}>
            <Image
              source={Icons.LEFT_ARROW}
              style={styles.arrowIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ) : (
          <View style={styles.noBackContainer} />
        )}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <TouchableOpacity
          style={styles.headerRightContainer}
          onPress={onPressRight ? onPressRight : () => {}}>
          {headerRightComponent && headerRightComponent()}
        </TouchableOpacity>
      </View>
    );
  }
);

export const HeaderCommonStyles = ({ primaryColor, textLight }: Palette) =>
  StyleSheet.create({
    container: {
      backgroundColor: primaryColor,
      height: 60,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    leftButton: {
      paddingHorizontal: 10,
    },
    arrowIcon: {
      width: 20,
      height: 20,
    },
    noBackContainer: {
      paddingHorizontal: 10,
    },
    titleContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: textLight,
    },
    headerRightContainer: {
      padding: 15,
    },
  });
