import React from 'react';
import { GlobalCategoriesProvider, GlobalCartProvider } from './index';

const GlobalProvider: React.FC = ({ children }) => {
  return (
    <GlobalCategoriesProvider>
      <GlobalCartProvider>{children}</GlobalCartProvider>
    </GlobalCategoriesProvider>
  );
};

export default GlobalProvider;
