import React, { useEffect, useState } from 'react';
import { ProductCard } from '..';
// import { useParams } from 'react-router';
import {
  ProductListing,
  ProductListingWrapper,
  ProductWrapper,
  Wrapper,
} from './styles';

const productMock: Product[] = [
  {
    collection: {
      id: 'fqe4tq3',
      name: 'awsomeName',
    },
    id: 'rt134rt134t1',
    images: [
      {
        id: 'df34f43',
        image:
          'https://www.cbacessorios.com.br/media/catalog/product/cache/1/image/a4e40ebdc3e371adff845072e1c73f37/k/2/k2924.jpg',
      },
    ],
    name: 'produto fone',
    price: 371.71,
    trending: true,
    description: 'here is some description',
    details: 'there are a lot of details',
    quantity: 3,
  },
  {
    collection: {
      id: 'fqe4tq3',
      name: 'awsomeName',
    },
    id: 'rt134rt134t1',
    images: [
      {
        id: 'df34f43',
        image:
          'https://www.cbacessorios.com.br/media/catalog/product/cache/1/image/a4e40ebdc3e371adff845072e1c73f37/k/2/k2924.jpg',
      },
    ],
    name: 'produto fone',
    price: 371.71,
    trending: true,
    description: 'here is some description',
    details: 'there are a lot of details',
    quantity: 3,
  },
  {
    collection: {
      id: 'fqe4tq3',
      name: 'awsomeName',
    },
    id: 'rt134rt134t1',
    images: [
      {
        id: 'df34f43',
        image:
          'https://www.cbacessorios.com.br/media/catalog/product/cache/1/image/a4e40ebdc3e371adff845072e1c73f37/k/2/k2924.jpg',
      },
    ],
    name: 'produto fone',
    price: 371.71,
    trending: true,
    description: 'here is some description',
    details: 'there are a lot of details',
    quantity: 3,
  },
  {
    collection: {
      id: 'fqe4tq3',
      name: 'awsomeName',
    },
    id: 'rt134rt134t1',
    images: [
      {
        id: 'df34f43',
        image:
          'https://www.cbacessorios.com.br/media/catalog/product/cache/1/image/a4e40ebdc3e371adff845072e1c73f37/k/2/k2924.jpg',
      },
    ],
    name: 'produto fone',
    price: 371.71,
    trending: true,
    description: 'here is some description',
    details: 'there are a lot of details',
    quantity: 3,
  },
  {
    collection: {
      id: 'fqe4tq3',
      name: 'awsomeName',
    },
    id: 'rt134rt134t1',
    images: [
      {
        id: 'df34f43',
        image:
          'https://www.cbacessorios.com.br/media/catalog/product/cache/1/image/a4e40ebdc3e371adff845072e1c73f37/k/2/k2924.jpg',
      },
    ],
    name: 'produto fone',
    price: 371.71,
    trending: true,
    description: 'here is some description',
    details: 'there are a lot of details',
    quantity: 3,
  },
  {
    collection: {
      id: 'fqe4tq3',
      name: 'awsomeName',
    },
    id: 'rt134rt134t1',
    images: [
      {
        id: 'df34f43',
        image:
          'https://www.cbacessorios.com.br/media/catalog/product/cache/1/image/a4e40ebdc3e371adff845072e1c73f37/k/2/k2924.jpg',
      },
    ],
    name: 'produto fone',
    price: 371.71,
    trending: true,
    description: 'here is some description',
    details: 'there are a lot of details',
    quantity: 3,
  },
  {
    collection: {
      id: 'fqe4tq3',
      name: 'awsomeName',
    },
    id: 'rt134rt134t1',
    images: [
      {
        id: 'df34f43',
        image:
          'https://www.cbacessorios.com.br/media/catalog/product/cache/1/image/a4e40ebdc3e371adff845072e1c73f37/k/2/k2924.jpg',
      },
    ],
    name: 'produto fone',
    price: 371.71,
    trending: true,
    description: 'here is some description',
    details: 'there are a lot of details',
    quantity: 3,
  },
  {
    collection: {
      id: 'fqe4tq3',
      name: 'awsomeName',
    },
    id: 'rt134rt134t1',
    images: [
      {
        id: 'df34f43',
        image:
          'https://www.cbacessorios.com.br/media/catalog/product/cache/1/image/a4e40ebdc3e371adff845072e1c73f37/k/2/k2924.jpg',
      },
    ],
    name: 'produto fone',
    price: 371.71,
    trending: true,
    description: 'here is some description',
    details: 'there are a lot of details',
    quantity: 3,
  },
];

const ProductDetails: React.FC = () => {
  // const { id = '' } = useParams();
  // const [counterValue, setCounterValue] = useState(1);
  // const [productData, setProductData] = useState<Product>();

  // useEffect(() => {
  //   async function getDataProducts() {
  //     const response = await fetchSingleProduct(id);
  //     setProductData(response.data);
  //   }

  //   getDataProducts();
  // }, [id]);

  return (
    <Wrapper>
      <ProductListingWrapper>
        <ProductListing>
          {productMock.map(
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

export default ProductDetails;
