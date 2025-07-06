import { createRef } from 'react';
import { IndicatorRef } from '../components';

export const logger = (...args: any) => {
  if (__DEV__) {
    // eslint-disable-next-line no-console
    console.log(...args);
  }
};
