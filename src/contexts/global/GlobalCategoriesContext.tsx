import React, { createContext, useEffect, useState } from 'react';
import { fetchCollections } from '../../api';

type CategoriesData = {
  categories: Collections[];
  categoriesOnly: string[];
};

export const GlobalCategoriesContext = createContext<CategoriesData>(
  {} as CategoriesData,
);

export const GlobalCategoriesProvider: React.FC = ({ children }) => {
  const [categories, setCategories] = useState<Collections[]>([]);
  const [categoriesOnly, setCategoriesOnly] = useState<string[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      const categoriesResponse = await fetchCollections();
      setCategories(categoriesResponse.data);
      setCategoriesOnly(categoriesResponse.data.map(({ name }) => name));
    };

    getCategories();
  }, []);

  return (
    <GlobalCategoriesContext.Provider value={{ categories, categoriesOnly }}>
      {children}
    </GlobalCategoriesContext.Provider>
  );
};
