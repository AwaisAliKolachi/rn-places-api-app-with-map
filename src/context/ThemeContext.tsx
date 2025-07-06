import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { storage } from './storage';
import { StorageKeys } from '../constants';
import { Theme, color, Palette } from '../utils';

export interface AppThemeContextType {
  appTheme: Theme;
  setAppTheme: (theme: Theme) => void;
  color: Palette;
}

export const AppThemeContext = createContext<AppThemeContextType | undefined>(
  undefined
);

export const useColor = () => {
  const context = useContext(AppThemeContext);
  if (!context) throw Error('useColor must be used inside AppThemeContext');
  return context;
};

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  const [appTheme, setTheme] = useState<Theme>('light');

  const setAppTheme = useCallback((theme: Theme) => {
    storage.setData(StorageKeys.APP_THEME, theme);
    setTheme(theme);
  }, []);

  const value: AppThemeContextType = useMemo(() => {
    return {
      appTheme,
      color: color[appTheme || 'light'],
      setAppTheme,
    };
  }, [appTheme, setAppTheme]);

  useEffect(() => {
    const theme = storage.getData(StorageKeys.APP_THEME);
    if (theme) {
      setTheme(theme);
    }
  }, []);

  return (
    <AppThemeContext.Provider value={value}>
      {children}
    </AppThemeContext.Provider>
  );
};
