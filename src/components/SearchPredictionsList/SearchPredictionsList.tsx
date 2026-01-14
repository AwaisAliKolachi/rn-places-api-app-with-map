import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAppContext } from '../../context';
import { Palette } from '../../utils';
import { Icons } from '../../assets/icons';
import { GoogleLocationResult } from '@appandflow/react-native-google-autocomplete';

export type SearchPredictionsListProps = React.PropsWithChildren & {
  locationResults: GoogleLocationResult[];
  onSelectPrediction: (el: GoogleLocationResult) => void;
};

export const SearchPredictionsList = ({
  locationResults,
  onSelectPrediction,
}: SearchPredictionsListProps) => {
  const { color } = useAppContext();
  const styles = SearchPredictionsListStyles(color);

  const renderList = () => {
    return locationResults.slice(0, 5).map((el: GoogleLocationResult, i) => (
      <TouchableOpacity
        key={String(i)}
        onPress={() => onSelectPrediction(el)}
        style={styles.suggestionItem}
      >
        <Image
          source={Icons.LOCATION_MAP}
          style={styles.locationPin}
          resizeMode="contain"
        />
        <View style={styles.suggestionContent}>
          <Text style={styles.suggestionMain}>
            {el.structured_formatting.main_text}
          </Text>
          <Text style={styles.suggestionSecondary}>
            {el.structured_formatting.secondary_text}
          </Text>
        </View>
        <Image
          source={Icons.GO_ICON}
          style={styles.locationPin}
          resizeMode="contain"
        />
      </TouchableOpacity>
    ));
  };

  if (locationResults.length === 0) return <></>;

  return <View style={styles.suggestionsContainer}>{renderList()}</View>;
};

export const SearchPredictionsListStyles = ({}: Palette) =>
  StyleSheet.create({
    suggestionsContainer: {
      marginBottom: 16,
      backgroundColor: '#fafafa',
      borderRadius: 8,
      paddingVertical: 8,
      paddingHorizontal: 12,
    },
    suggestionContent: {
      flex: 1,
    },
    suggestionItem: {
      width: '100%',
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      flexDirection: 'row',
      alignItems: 'center',
    },
    suggestionMain: {
      fontSize: 16,
      fontWeight: '500',
      color: '#333',
      width: '90%',
    },
    suggestionSecondary: {
      fontSize: 14,
      color: '#777',
      width: '80%',
    },
    locationPin: {
      width: 22,
      height: 22,
      marginRight: 10,
    },
  });
