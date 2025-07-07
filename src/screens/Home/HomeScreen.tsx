import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import useHome from './useHome';
import {
  BaseLayout,
  HeaderCommon,
  LoadingIndicator,
  SearchHistoryItem,
  SearchInput,
  SearchPredictionsList,
} from '../../components';
import { Icons } from '../../assets/icons';
import {
  GoogleLocationDetailResult,
  GoogleLocationResult,
} from '@appandflow/react-native-google-autocomplete';

const HomeScreen = () => {
  const {
    styles,
    history,
    onSelectPrediction,
    onPressHistoryItem,
    term,
    setTerm,
    clearSearch,
    locationResults,
    onPressDeleteItem,
    onPressClearHistory,
    isLoading,
    isSearching,
  } = useHome();

  const renderItem = ({ item }: { item: GoogleLocationDetailResult }) => {
    return (
      <SearchHistoryItem
        item={item}
        onPressHistoryItem={onPressHistoryItem}
        onPressDeleteItem={onPressDeleteItem}
      />
    );
  };

  const renderListHeader = () => {
    return (
      <>
        <SearchPredictionsList
          locationResults={locationResults}
          onSelectPrediction={onSelectPrediction}
        />
        <View style={styles.recentRowContainer}>
          <Text style={styles.recentlyText}>Search History</Text>
          {history.length > 0 && (
            <TouchableOpacity onPress={() => onPressClearHistory()}>
              <Text style={styles.clearHistoryText}>Clear history</Text>
            </TouchableOpacity>
          )}
        </View>
        {history.length === 0 && (
          <View style={styles.noHistoryContainer}>
            <Text style={styles.noHistoryText}>No history found</Text>
          </View>
        )}
      </>
    );
  };

  return (
    <BaseLayout>
      <LoadingIndicator isLoading={isLoading} />
      <HeaderCommon title="Place Finder" showBack={false} />
      <View style={styles.container}>
        <SearchInput
          term={term}
          setTerm={setTerm}
          clearSearch={clearSearch}
          isSearching={isSearching}
        />
        <FlatList
          data={history}
          keyExtractor={item => item.place_id}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          ListHeaderComponent={renderListHeader}
          keyboardShouldPersistTaps="handled"
        />
      </View>
    </BaseLayout>
  );
};

export default React.memo(HomeScreen);
