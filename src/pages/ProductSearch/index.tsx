import React from 'react';
import {
  Categories,
  Footer,
  Header,
  OptionSelector,
  ContentWrapper,
} from '../../components';
import { ProductsResults, SearchWrapper, Wrapper } from './styles';

const ProductSearch: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Categories />
      <ContentWrapper>
        <SearchWrapper>
          <OptionSelector />
          <ProductsResults />
        </SearchWrapper>
      </ContentWrapper>
      <Footer />
    </Wrapper>
  );
};

export default ProductSearch;
