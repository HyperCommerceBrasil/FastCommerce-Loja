import React from 'react';
import {
  Categories,
  Footer,
  Header,
  ContentWrapper,
  ProductDetails,
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
    </Wrapper>
  );
};

export default DetailedProduct;
