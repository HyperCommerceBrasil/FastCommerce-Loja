import React from 'react';
import { CategoriesProviderGlobal } from './index';

const GlobalProvider: React.FC = ({ children }) => {
  return <CategoriesProviderGlobal>{children}</CategoriesProviderGlobal>;
};

export default GlobalProvider;
