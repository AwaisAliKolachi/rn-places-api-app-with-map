import { useRef, useState } from 'react';
import { useAppContext } from '../../context';
import { MapStyles } from './Map.style';
import MapView from 'react-native-maps';
import { useRoute } from '@react-navigation/native';
import { MapRoute } from '../../navigation/appNavigation.type';
import { logger } from '../../utils';

const useMap = () => {
  const { color, navigation } = useAppContext();
  const mapRef = useRef<MapView>(null);
  const [mapType, setMapType] = useState<'standard' | 'satellite'>('standard');
  const {
    params: { place },
  } = useRoute<MapRoute>();
  const initialRegion = {
    latitude: place.geometry.location.lat,
    longitude: place.geometry.location.lng,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  const recenterMap = () => {
    mapRef.current?.animateCamera({
      center: {
        latitude: place.geometry.location.lat,
        longitude: place.geometry.location.lng,
      },
    });
  };

  return {
    color,
    navigation,
    styles: MapStyles(color),
    mapRef,
    initialRegion,
    mapType,
    setMapType,
    place,
    recenterMap,
  };
};

export default useMap;
