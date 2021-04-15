import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { InfiniteScrollStatusBar, ProductCard } from '..';
import { ProductListing, ProductWrapper, Wrapper } from './styles';

type ProductSearchListingProps = {
  products?: Product[];
  next?(): void;
  hasMore?: boolean;
  loaderStatusMessage?: string;
  loaderEndMessage?: string;
};

const ProductSearchListing: React.FC<ProductSearchListingProps> = ({
  products,
  next = () => ({}),
  hasMore = false,
  loaderEndMessage = 'Procurando... 🔎',
  loaderStatusMessage = 'Foi tudo o que encontramos! 🕵️',
}) => {
  return (
    <InfiniteScroll
      dataLength={products?.length || 0}
      next={next}
      hasMore={hasMore}
      loader={<InfiniteScrollStatusBar statusMessage={loaderEndMessage} />}
      endMessage={
        <InfiniteScrollStatusBar statusMessage={loaderStatusMessage} />
      }
    >
      <Wrapper>
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
      </Wrapper>
    </InfiniteScroll>
  );
};

export default ProductSearchListing;
