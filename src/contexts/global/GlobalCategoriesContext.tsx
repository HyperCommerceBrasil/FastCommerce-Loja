import React, { createContext, useEffect, useState } from 'react';
import { fetchCollections } from '../../services';

type CategoriesData = {
  categories: Collections[];
};

export const GlobalCategoriesContext = createContext<CategoriesData>(
  {} as CategoriesData,
);

export const GlobalCategoriesProvider: React.FC = ({ children }) => {
  const [categories, setCategories] = useState<Collections[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      const categoriesResponse = await fetchCollections();
      setCategories(categoriesResponse.data);
    };

    getCategories();
  }, []);

  return (
    <GlobalCategoriesContext.Provider value={{ categories }}>
      {children}
    </GlobalCategoriesContext.Provider>
  );
};
