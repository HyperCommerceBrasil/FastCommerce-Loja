import React from 'react';
import { GlobalCategoriesProvider } from './index';

const GlobalProvider: React.FC = ({ children }) => {
  return <GlobalCategoriesProvider>{children}</GlobalCategoriesProvider>;
};

export default GlobalProvider;
