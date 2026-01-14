import React from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useAppContext } from '../../context';
import { Palette } from '../../utils';
import { Icons } from '../../assets/icons';

export type SearchInputProps = React.PropsWithChildren & {
  isSearching?: boolean;
  term: string;
  setTerm: (value: string) => void;
  clearSearch: () => void;
};

export const SearchInput = ({
  isSearching = false,
  term,
  setTerm,
  clearSearch,
}: SearchInputProps) => {
  const { color } = useAppContext();
  const styles = SearchInputStyles(color);

  return (
    <View style={styles.searchInputContainer}>
      {isSearching ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color={color.primaryColor} />
        </View>
      ) : (
        <Image
          source={Icons.SEARCH_ICON}
          style={styles.locationPin}
          resizeMode="contain"
        />
      )}
      <TextInput
        value={term}
        onChangeText={setTerm}
        placeholder="Type here to find a place..."
        placeholderTextColor={color.textPlaceholer}
        style={styles.searchInput}
        autoComplete="off"
        autoCorrect={false}
        spellCheck={false}
      />
      {term.length > 0 && (
        <TouchableOpacity
          onPress={() => {
            setTerm('');
            clearSearch();
          }}
          hitSlop={{ top: 20, bottom: 20, left: 5, right: 30 }}
        >
          <Image
            source={Icons.CROSS_ICON}
            style={styles.clearIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export const SearchInputStyles = ({}: Palette) =>
  StyleSheet.create({
    searchInputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 48,
      borderRadius: 8,
      paddingHorizontal: 16,
      fontSize: 16,
      marginBottom: 5,
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    searchInput: {
      flex: 1,
      // height: 48,
      fontSize: 16,
    },
    clearIcon: {
      width: 15,
      height: 15,
    },
    locationPin: {
      width: 22,
      height: 22,
      marginRight: 10,
    },
    loadingContainer: {
      paddingRight: 12,
    },
  });
