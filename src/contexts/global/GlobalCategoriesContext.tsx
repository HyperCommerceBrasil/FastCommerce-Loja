import React, { createContext, useEffect, useState } from 'react';
import { fetchCollections } from '../../services';

type CategoriesData = {
  categories: Collections[];
};

const defaultCollections: Collections[] = [
  {
    id: 'default_home',
    name: 'Início',
  },
];

export const GlobalCategoriesContext = createContext<CategoriesData>(
  {} as CategoriesData,
);

export const GlobalCategoriesProvider: React.FC = ({ children }) => {
  const [categories, setCategories] = useState<Collections[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      const categoriesResponse = await fetchCollections();
      setCategories(defaultCollections.concat(categoriesResponse.data));
    };

    getCategories();
  }, []);

  return (
    <GlobalCategoriesContext.Provider value={{ categories }}>
      {children}
    </GlobalCategoriesContext.Provider>
  );
};
