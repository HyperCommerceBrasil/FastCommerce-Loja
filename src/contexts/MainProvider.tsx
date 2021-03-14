import React from 'react';
import { ValueInsertedProvider } from './index';

export const MainProvider: React.FC = ({ children }) => {
  return <ValueInsertedProvider>{children}</ValueInsertedProvider>;
};
