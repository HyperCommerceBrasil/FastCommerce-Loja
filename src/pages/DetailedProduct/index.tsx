import React from 'react';
import {
  Categories,
  Footer,
  Header,
  ContentWrapper,
  ProductDetails,
  PurchaseBottom,
} from '../../components';
import { Wrapper } from './styles';

const DetailedProduct: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Categories />
      <ContentWrapper>
        <ProductDetails />
      </ContentWrapper>
      <Footer shouldHaveBottomPadding={100} />
      <PurchaseBottom />
    </Wrapper>
  );
};

export default DetailedProduct;
