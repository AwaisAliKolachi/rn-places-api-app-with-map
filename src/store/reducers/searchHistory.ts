import { GoogleLocationDetailResult } from '@appandflow/react-native-google-autocomplete';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AppData = {
  history: GoogleLocationDetailResult[];
};

const initialState: AppData = {
  history: [],
};

export const searchHistorySlice = createSlice({
  name: 'searchHistory',
  initialState,
  reducers: {
    // Clears entire search history
    resetSearchHistory: () => initialState,

    // Adds to history or moves existing item to top
    setSearchHistory: (
      state,
      { payload }: PayloadAction<GoogleLocationDetailResult>
    ) => {
      // Remove if already exists
      state.history = state.history.filter(
        item => item.place_id !== payload.place_id
      );
      // Add to top
      state.history.unshift(payload);
    },

    // Removes a single item by place_id
    removeHistoryItem: (
      state,
      { payload }: PayloadAction<{ place_id: string }>
    ) => {
      state.history = state.history.filter(
        item => item.place_id !== payload.place_id
      );
    },
  },
});

export const {
  actions: { resetSearchHistory, setSearchHistory, removeHistoryItem },
  name: searchHistoryName,
  reducer: searchHistory,
} = searchHistorySlice;
