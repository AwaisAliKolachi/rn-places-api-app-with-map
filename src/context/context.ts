import { useColor } from './ThemeContext';
import { AppNavigationProp } from '../navigation/appNavigation.type';
import {
  useWithNavigation,
  WithNavigation,
} from '../navigation/withNavigation';

export const useAppContextOnly = () => {
  const color = useColor();

  return {
    ...color,
  };
};

export type AppContextType = ReturnType<typeof useAppContextOnly>;

export const useAppContext = (): WithNavigation<
  AppNavigationProp,
  AppContextType
> => {
  return useWithNavigation<AppNavigationProp, AppContextType>(
    useAppContextOnly()
  );
};
