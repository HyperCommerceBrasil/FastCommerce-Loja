import React from 'react';
import { ProductCard } from '..';
import { CarrouselWrapper, ItemWrapper, Wrapper } from './styles';

type ProductCarrouselProps = {
  products: Product[];
};

const ProductCarrousel: React.FC<ProductCarrouselProps> = ({ products }) => (
  <Wrapper>
    <CarrouselWrapper>
      {products.map(product =>
        product.trending ? (
          <ItemWrapper key={product.id}>
            <ProductCard
              key={product.id}
              id={product.id}
              price={product.price}
              collectionName={product.collection.name}
              name={product.name}
              imageURL={product.images}
              quantity={product.quantity}
              product={product}
            />
          </ItemWrapper>
        ) : null,
      )}
    </CarrouselWrapper>
  </Wrapper>
);

export default ProductCarrousel;
