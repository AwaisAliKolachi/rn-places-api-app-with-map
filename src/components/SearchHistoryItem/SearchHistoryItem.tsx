import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAppContext } from '../../context';
import { Palette } from '../../utils';
import { Icons } from '../../assets/icons';
import { GoogleLocationDetailResult } from '@appandflow/react-native-google-autocomplete';

export type SearchHistoryItemProps = React.PropsWithChildren & {
  item: GoogleLocationDetailResult;
  onPressHistoryItem: (item: GoogleLocationDetailResult) => void;
  onPressDeleteItem: (item: GoogleLocationDetailResult) => void;
};

export const SearchHistoryItem = React.memo(
  ({ item, onPressHistoryItem, onPressDeleteItem }: SearchHistoryItemProps) => {
    const { color } = useAppContext();
    const styles = SearchHistoryItemStyles(color);

    return (
      <View style={styles.historyItem}>
        <Image
          source={Icons.LOCATION_MAP}
          style={styles.locationPin}
          resizeMode="contain"
        />
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => onPressHistoryItem(item)}>
          <Text style={styles.historyText}>{item.name}</Text>
          <Text style={styles.subtitleText}>{item.formatted_address}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPressDeleteItem(item)}>
          <Image
            source={Icons.DELETE_ICON}
            style={styles.deleteIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    );
  }
);

export const SearchHistoryItemStyles = ({ primaryColor, textLight }: Palette) =>
  StyleSheet.create({
    historyItem: {
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    historyText: {
      fontSize: 16,
      color: '#444',
      width: '80%',
    },
    locationPin: {
      width: 22,
      height: 22,
      marginRight: 10,
    },
    subtitleText: {
      fontSize: 14,
      color: '#777',
      width: '80%',
    },
    deleteIcon: {
      width: 20,
      height: 20,
    },
  });
