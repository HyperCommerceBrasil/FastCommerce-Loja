import React, { useContext, useEffect, useState } from 'react';
import { GlobalCategoriesContext } from '../../contexts';
import { fetchAllProducts } from '../../services';
import { filterByCollection, filterByName, paginateArray } from '../../utils';
import ProductSearch from './ProductSearch';
import { Products } from '../../mocks';

const ProductSearchContainer: React.FC = () => {
  const productsy = Products;
  const { categoriesOnly } = useContext(GlobalCategoriesContext);

  const [searchText, setSearchText] = useState('');
  const [category, setCategory] = useState('');
  const [lastPageLoaded, setLastPageLoaded] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Products
  const [products, setProducts] = useState<Product[]>(productsy);
  const [allProducts, setAllProducts] = useState<Product[]>();
  const [
    allFilteredPaginatedProducts,
    setAllFilteredPaginatedProducts,
  ] = useState<Product[][]>([]);

  const handleSearchTextChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setSearchText(e.target.value);
  };

  const getAllFilteredPaginatedArray = (
    searchMode: 'byName' | 'byCategory',
  ) => {
    if (searchMode === 'byCategory') {
      return paginateArray(9, filterByCollection(category, allProducts));
    }
    return paginateArray(9, filterByName(searchText, allProducts));
  };

  const handleInitData = (searchMode: 'byName' | 'byCategory') => {
    if (searchMode === 'byCategory') {
      setAllFilteredPaginatedProducts(
        paginateArray(9, filterByCollection(category, allProducts)),
      );
      setProducts(
        paginateArray(9, filterByCollection(category, allProducts))[0],
      );
    } else {
      setAllFilteredPaginatedProducts(
        paginateArray(9, filterByName(searchText, allProducts)),
      );
      setProducts(paginateArray(9, filterByName(searchText, allProducts))[0]);
    }

    if (getAllFilteredPaginatedArray(searchMode).length < 2) {
      setHasMore(false);
    }
  };

  const handleNext = () => {
    if (lastPageLoaded + 1 < allFilteredPaginatedProducts.length) {
      setProducts(
        products.concat(allFilteredPaginatedProducts[lastPageLoaded]),
      );
      setLastPageLoaded(lastPageLoaded + 1);
    } else {
      setHasMore(false);
    }
  };

  const handleSearchChange = (
    target: EventTarget & (HTMLTextAreaElement | HTMLInputElement),
  ) => {
    setLastPageLoaded(1);
    setHasMore(true);
    setSearchText(target.value);
    handleInitData('byName');
  };

  const handleCategoryChange = () => {
    setLastPageLoaded(1);
    setHasMore(true);
    handleInitData('byCategory');
  };

  useEffect(() => {
    async function getProducts() {
      const categoriesResponse = await fetchAllProducts();
      setAllProducts(categoriesResponse.data);
    }

    getProducts();
  }, []);

  return (
    <ProductSearch
      products={products}
      searchText={searchText}
      handleSearchTextChange={handleSearchTextChange}
      options={categoriesOnly}
      hasMore={hasMore}
      option={category}
      setSelectedOption={setCategory}
      next={handleNext}
      onOptionChange={handleCategoryChange}
      itemsAmmountOnPage={9}
    />
  );
};

export default ProductSearchContainer;
