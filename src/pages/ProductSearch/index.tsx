import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import InfiniteScroll from 'react-infinite-scroll-component';
import {
  Categories,
  Footer,
  Header,
  OptionSelector,
  ContentWrapper,
  ProductSearchListing,
  InfiniteScrollStatusBar,
} from '../../components';
// import { fetchAllProducts } from '../../services';
import { filterByCollection, paginateArray } from '../../utils';
import { SearchWrapper, Wrapper } from './styles';
import { newFetchetProducts, productMock } from './mock';

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
  const [category, setCategory] = useState(query);
  const [lastPageLoaded, setLastPageLoaded] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [noProductsFound, setNoProductsFound] = useState(false);

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

  useEffect(() => {
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
        </SearchWrapper>
        <InfiniteScroll
          dataLength={products?.length}
          next={handleNext}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
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
