import React, { createContext, useEffect, useState } from 'react';
import { fetchCollections } from '../../services';

type CategoriesData = {
  categories: Collections[];
};

export const CategoriesContext = createContext<CategoriesData>(
  {} as CategoriesData,
);

export const CategoriesProviderGlobal: React.FC = ({ children }) => {
  const [categories, setCategories] = useState<Collections[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      const categoriesResponse = await fetchCollections();
      setCategories(categoriesResponse.data);
    };

    getCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories }}>
      {children}
    </CategoriesContext.Provider>
  );
};
