import React from 'react';
import {
  GlobalCategoriesProvider,
  GlobalCartProvider,
  GlobalUserProvider,
} from './index';

const GlobalProvider: React.FC = ({ children }) => {
  return (
    <GlobalUserProvider>
      <GlobalCategoriesProvider>
        <GlobalCartProvider>{children}</GlobalCartProvider>
      </GlobalCategoriesProvider>
    </GlobalUserProvider>
  );
};

export default GlobalProvider;
