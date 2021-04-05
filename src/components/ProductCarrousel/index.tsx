import React from 'react';
import { ProductCard } from '..';
import { CarrouselWrapper, ItemWrapper, Wrapper } from './styles';

type ProductCarrouselProps = {
  products: Product[];
};

const ProductCarrousel: React.FC<ProductCarrouselProps> = ({ products }) => (
  <Wrapper>
    <CarrouselWrapper>
      {products.map(
        ({ id, name, price, trending, collection, images, quantity }) =>
          trending ? (
            <ItemWrapper key={id}>
              <ProductCard
                key={id}
                id={id}
                price={price}
                collectionName={collection.name}
                name={name}
                imageURL={images}
                quantity={quantity}
              />
            </ItemWrapper>
          ) : null,
      )}
    </CarrouselWrapper>
  </Wrapper>
);

export default ProductCarrousel;
