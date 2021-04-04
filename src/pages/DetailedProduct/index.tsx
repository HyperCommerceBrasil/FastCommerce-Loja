import React from 'react';
import { Helmet } from 'react-helmet';
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
      <Helmet title="KKK" />
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
