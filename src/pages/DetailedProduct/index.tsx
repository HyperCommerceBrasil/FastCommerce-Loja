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
        <ProductDetails productImage="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1604021663000" />
      </ContentWrapper>
      <Footer shouldHaveBottomPadding={100} />
      <PurchaseBottom />
    </Wrapper>
  );
};

export default DetailedProduct;
