import React from 'react';
import { ProductCard, ButtonMain } from '..';
import { ButtonWrapper, CarrouselWrapper, Wrapper } from './styles';

const products = [
  <ProductCard />,
  <ProductCard />,
  <ProductCard />,
  <ProductCard />,
];

const ProductCarrousel: React.FC = () => (
  <Wrapper>
    <CarrouselWrapper>{products.map(item => item)}</CarrouselWrapper>
    <ButtonWrapper>
      <ButtonMain>Veja mais produtos</ButtonMain>
    </ButtonWrapper>
  </Wrapper>
);

export default ProductCarrousel;
