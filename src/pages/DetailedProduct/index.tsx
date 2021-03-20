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
        <ProductDetails productImage="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-family-hero-all?wid=940&hei=1112&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1604021663000" />
      </ContentWrapper>
      <Footer />
    </Wrapper>
  );
};

export default DetailedProduct;
