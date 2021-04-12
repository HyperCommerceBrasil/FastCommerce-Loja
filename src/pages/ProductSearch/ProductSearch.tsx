import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import InfiniteScroll from 'react-infinite-scroll-component';
import { TextField } from '@material-ui/core';
import {
  Categories,
  Footer,
  Header,
  OptionSelector,
  ContentWrapper,
  ProductSearchListing,
  InfiniteScrollStatusBar,
} from '../../components';
import { filterByCollection, paginateArray } from '../../utils';
import { SearchWrapper, Wrapper } from './styles';
import { filterByName } from '../../utils/array/filterByName';
import { fetchAllProducts } from '../../services';

type ProductSearchParams = {
  query?: string;
};

type ProductSearchProps = {
  initialAllProducts?: Product[];
  itemsAmmountOnPage?: number;
};

const ProductSearch: React.FC<ProductSearchProps> = ({
  itemsAmmountOnPage = 9,
  initialAllProducts,
}) => {
  // PageConfigs
  const { query = '' } = useParams<ProductSearchParams>();
  const [searchByName, setSearchByName] = useState('');
  const [category, setCategory] = useState(query);
  const [lastPageLoaded, setLastPageLoaded] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Products
  const [products, setProducts] = useState<Product[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>(
    initialAllProducts || [],
  );
  const [
    allFilteredPaginatedProducts,
    setAllFilteredPaginatedProducts,
  ] = useState<Product[][]>([]);

  const getAllFilteredPaginatedArray = (
    searchMode: 'byName' | 'byCategory',
  ) => {
    if (searchMode === 'byCategory') {
      return paginateArray(
        itemsAmmountOnPage,
        filterByCollection(category, allProducts),
      );
    }
    return paginateArray(
      itemsAmmountOnPage,
      filterByName(searchByName, allProducts),
    );
  };

  const handleInitData = (searchMode: 'byName' | 'byCategory') => {
    if (searchMode === 'byCategory') {
      setAllFilteredPaginatedProducts(
        paginateArray(
          itemsAmmountOnPage,
          filterByCollection(category, allProducts),
        ),
      );
      setProducts(
        paginateArray(
          itemsAmmountOnPage,
          filterByCollection(category, allProducts),
        )[0],
      );
    } else {
      setAllFilteredPaginatedProducts(
        paginateArray(
          itemsAmmountOnPage,
          filterByName(searchByName, allProducts),
        ),
      );
      setProducts(
        paginateArray(
          itemsAmmountOnPage,
          filterByName(searchByName, allProducts),
        )[0],
      );
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
    setSearchByName(target.value);
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
  }, [category, searchByName]);

  useEffect(() => {
    setLastPageLoaded(1);
    setHasMore(true);
    handleInitData('byCategory');
  }, [category]);

  return (
    <Wrapper>
      <Header />
      <Categories />
      <ContentWrapper>
        <SearchWrapper>
          <OptionSelector
            setCategory={setCategory}
            category={category}
            onCategoryChange={handleCategoryChange}
          />
          <TextField
            fullWidth
            placeholder="Pesquisar"
            variant="outlined"
            value={searchByName}
            onChange={({ target }) => handleSearchChange(target)}
          />
        </SearchWrapper>
        <InfiniteScroll
          dataLength={products?.length}
          next={handleNext}
          hasMore={hasMore}
          loader={<InfiniteScrollStatusBar statusMessage="Procurando... 🔎" />}
          endMessage={
            <InfiniteScrollStatusBar statusMessage="Foi tudo o que encontramos! 🕵️" />
          }
        >
          <ProductSearchListing products={products} />
        </InfiniteScroll>
      </ContentWrapper>
      <Footer />
    </Wrapper>
  );
};

export default ProductSearch;
