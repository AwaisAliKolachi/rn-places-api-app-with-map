import { HomeStyles } from './Home.style';
import { useDispatch, useSelector } from 'react-redux';
import {
  getSearchHistoryData,
  removeHistoryItem,
  resetSearchHistory,
  setSearchHistory,
} from '../../store';
import { useAppContext } from '../../context/context';
import { logger } from '../../utils';
import { Screen } from '../../navigation/appNavigation.type';
import {
  GoogleLocationDetailResult,
  GoogleLocationResult,
  useGoogleAutocomplete,
} from '@appandflow/react-native-google-autocomplete';
import { API_KEY } from '@env';
import { useState } from 'react';

const useHome = () => {
  const { color, navigation } = useAppContext();
  const { history } = useSelector(getSearchHistoryData);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const {
    locationResults,
    setTerm,
    clearSearch,
    searchDetails,
    term,
    searchError,
    isSearching,
  } = useGoogleAutocomplete(API_KEY, {
    language: 'en',
    debounce: 300,
    queryTypes: 'geocode|establishment',
  });

  const onSelectPrediction = async (place: GoogleLocationResult) => {
    setIsLoading(true);
    await searchDetails(place.place_id)
      .then((details: GoogleLocationDetailResult) => {
        console.log(JSON.stringify(details, null, 2));
        dispatch(setSearchHistory(details));
        navigation.navigate(Screen.MAP, { place: details });
      })
      .catch((error: any) => {
        logger('onSelectPrediction', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onPressHistoryItem = async (place: GoogleLocationDetailResult) => {
    navigation.navigate(Screen.MAP, { place });
  };

  const onPressDeleteItem = (place: GoogleLocationDetailResult) => {
    dispatch(removeHistoryItem(place));
  };

  const onPressClearHistory = () => {
    dispatch(resetSearchHistory());
  };

  return {
    navigation,
    styles: HomeStyles(color),
    color,
    history,
    onSelectPrediction,
    onPressHistoryItem,
    locationResults,
    setTerm,
    clearSearch,
    searchDetails,
    term,
    searchError,
    onPressDeleteItem,
    onPressClearHistory,
    isLoading,
    isSearching,
  };
};

export default useHome;
