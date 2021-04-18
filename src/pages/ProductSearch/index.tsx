import React, { useContext, useEffect, useState } from 'react';
import { GlobalCategoriesContext } from '../../contexts';
import { fetchAllProducts } from '../../services';
// import {
//   filterByCollection,
//   filterByName,
//   paginateArray,
//   useQuery,
// } from '../../utils';
import ProductSearch from './ProductSearch';
import { Products } from '../../mocks';
import { filterByCollection, paginateArray, useQuery } from '../../utils';

const ProductSearchContainer: React.FC = () => {
  // URL Query Params
  const { getURLQueryParam } = useQuery();
  const nameURLParam = getURLQueryParam('name');
  const categoryURLParam = getURLQueryParam('category');

  // Config
  const { categoriesOnly } = useContext(GlobalCategoriesContext);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [lastPageLoaded, setLastPageLoaded] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  // Products states
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [allFilteredProducts, setAllFilteredProducts] = useState<Product[][]>(
    [],
  );
  const [computedProducts, setComputedProducts] = useState<Product[]>([]);

  const handleNext = () => {
    if (lastPageLoaded + 1 < allFilteredProducts.length) {
      setComputedProducts(
        computedProducts.concat(allFilteredProducts[lastPageLoaded]),
      );
      setLastPageLoaded(lastPageLoaded + 1);
    } else {
      setHasMore(false);
    }
  };

  const handleFilterProducts = (
    data?: Product[],
    category?: string | null,
    name?: string | null,
  ) => {
    let filteredProducts;
    if (category) {
      setSelectedCategory(category);
      filteredProducts = paginateArray(9, filterByCollection(category, data));
    }

    if (name) {
      filteredProducts = paginateArray(9, filterByCollection(name, data));
    }

    if (filteredProducts) {
      setAllFilteredProducts(filteredProducts);
      setComputedProducts(filteredProducts[0]);
    }
  };

  const initializeData = (data?: Product[]) => {
    handleFilterProducts(data, categoryURLParam, nameURLParam);
  };

  useEffect(() => {
    async function initialize() {
      setHasMore(true);
      const categoriesResponse = await fetchAllProducts();
      setAllProducts(categoriesResponse.data);
      console.log('All Products: ', categoriesResponse.data);
      initializeData(categoriesResponse.data);
      setHasMore(false);
    }

    initialize();
  }, []);
  // const productsy = Products;
  console.log('ComputedProducts: ', computedProducts);
  return (
    <ProductSearch
      products={computedProducts}
      searchText=""
      handleSearchTextChange={() => ({})}
      options={categoriesOnly}
      option={selectedCategory}
      setSelectedOption={() => ({})}
      onOptionChange={() => ({})}
      next={() => ({})}
      hasMore={hasMore}
      itemsAmmountOnPage={9}
    />
  );
};

export default ProductSearchContainer;
