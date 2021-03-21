import React from 'react';
import { ProductCard, ButtonMain } from '..';
import { ButtonWrapper, CarrouselWrapper, Wrapper } from './styles';

// const products = [
//   <ProductCard />,
//   <ProductCard />,
//   <ProductCard />,
//   <ProductCard />,
// ];

interface Product {
  name: string;
  price: number;
  collection: {
    id: string;
    name: string;
  };
}

interface CarouselProps {
  products: Product[];
}

const ProductCarrousel: React.FC<CarouselProps> = ({ products }) => (
  <Wrapper>
    <CarrouselWrapper>
      {products.map(product => (
        <ProductCard product={product} />
      ))}
    </CarrouselWrapper>
    <ButtonWrapper>
      <ButtonMain>Veja mais produtos</ButtonMain>
    </ButtonWrapper>
  </Wrapper>
);

export default ProductCarrousel;
