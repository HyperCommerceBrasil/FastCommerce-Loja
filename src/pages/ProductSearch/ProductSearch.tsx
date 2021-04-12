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
import { productMock } from './mock';

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
  // const [noProductsFound, setNoProductsFound] = useState(false);

  // Products
  const [products, setProducts] = useState<Product[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>(
    initialAllProducts || productMock,
  );
  const [
    allFilteredPaginatedProducts,
    setAllFilteredPaginatedProducts,
  ] = useState<Product[][]>([]);

  const getAllFilteredPaginatedArray = () => {
    return paginateArray(
      itemsAmmountOnPage,
      filterByCollection(category, allProducts),
    );
  };

  const handleInitData = () => {
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

    if (getAllFilteredPaginatedArray().length < 2) {
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
    setSearchByName(target.value);
  };

  useEffect(() => {
    setAllProducts(allProducts);
    setLastPageLoaded(1);
    setHasMore(true);
    handleInitData();
  }, [category]);

  return (
    <Wrapper>
      <Header />
      <Categories />
      <ContentWrapper>
        <SearchWrapper>
          <OptionSelector setCategory={setCategory} category={category} />
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
