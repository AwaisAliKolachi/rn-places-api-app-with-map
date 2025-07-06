import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAppContext } from '../../context';
import { Palette } from '../../utils';
import { Icons } from '../../assets/icons';

export type MapType = 'standard' | 'satellite';

export type MapTypeSwitchProps = {
  mapType: MapType;
  setMapType: React.Dispatch<React.SetStateAction<MapType>>;
};

export const MapTypeSwitch = React.memo(
  ({ mapType, setMapType }: MapTypeSwitchProps) => {
    const { color } = useAppContext();
    const styles = MapTypeSwitchStyles(color);

    const isSatellite = mapType === 'satellite';
    const isStandard = mapType === 'standard';

    return (
      <View style={styles.wrapper}>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            onPress={() => setMapType('standard')}
            style={[styles.mapButton, isStandard && styles.activeMapButton]}>
            <Image
              source={Icons.TYPE_MAP}
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setMapType('satellite')}
            style={[styles.mapButton, isSatellite && styles.activeMapButton]}>
            <Image
              source={Icons.TYPE_SATELLITE}
              style={styles.icon}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
);

const MapTypeSwitchStyles = (color: Palette) =>
  StyleSheet.create({
    wrapper: {
      position: 'absolute',
      top: 50,
      left: 10,
      right: 10,
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
    buttonGroup: {
      borderRadius: 8,
      gap: 6,
    },
    mapButton: {
      borderWidth: 3,
      borderColor: 'white',
      borderRadius: 8,
      overflow: 'hidden',
    },
    activeMapButton: {
      borderColor: color.primaryColor,
      borderWidth: 3,
      transform: [{ scale: 1.15 }],
    },
    icon: {
      width: 50,
      height: 50,
    },
  });
