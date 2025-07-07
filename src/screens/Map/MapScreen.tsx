import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import useMap from './useMap';
import {
  BaseLayout,
  MapTypeSwitch,
  PlaceDetailsSection,
  RecenterMapButton,
} from '../../components';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Icons } from '../../assets/icons';
import { logger, screenWidth } from '../../utils';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const MapScreen = () => {
  const {
    navigation,
    styles,
    mapRef,
    initialRegion,
    mapType,
    setMapType,
    place,
    recenterMap,
  } = useMap();

  return (
    <GestureHandlerRootView style={styles.container}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={false}
        style={styles.map}
        initialRegion={initialRegion}
        mapType={mapType}>
        <Marker coordinate={initialRegion} title={place.name} />
      </MapView>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.goBack()}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        style={styles.backButtonContainer}>
        <Image
          source={Icons.LEFT_ARROW_CIRCLE_WHITE}
          style={styles.backButtonIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <MapTypeSwitch mapType={mapType} setMapType={setMapType} />
      <RecenterMapButton recenterMap={recenterMap} />
      <PlaceDetailsSection place={place} />
    </GestureHandlerRootView>
  );
};

export default React.memo(MapScreen);
