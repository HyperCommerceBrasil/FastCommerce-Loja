import React from 'react';
import { ProductCard } from '..';
import {
  ProductListing,
  ProductListingWrapper,
  ProductWrapper,
  Wrapper,
} from './styles';

type ProductSearchListingProps = {
  products?: Product[];
};

const ProductSearchListing: React.FC<ProductSearchListingProps> = ({
  products,
}) => {
  return (
    <Wrapper>
      <ProductListingWrapper>
        <ProductListing>
          {products?.map(
            ({ collection, id, name, price, images, quantity }) => (
              <ProductWrapper key={id}>
                <ProductCard
                  id={id}
                  collectionName={collection.name}
                  name={name}
                  price={price}
                  imageURL={images}
                  quantity={quantity}
                />
              </ProductWrapper>
            ),
          )}
        </ProductListing>
      </ProductListingWrapper>
    </Wrapper>
  );
};

export default ProductSearchListing;
