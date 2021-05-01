import React from 'react';
import {
  Categories,
  Footer,
  Header,
  ContentWrapper,
  ProductDetails,
  Cart,
} from '../../components';
import { Wrapper } from './styles';

const DetailedProduct: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Categories />
      <Cart />
      <ContentWrapper>
        <ProductDetails />
      </ContentWrapper>
      <Footer shouldHaveBottomPadding={100} />
    </Wrapper>
  );
};

export default DetailedProduct;
