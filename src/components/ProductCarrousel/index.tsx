import React from 'react';
import { ProductCard } from '..';
import { CarrouselWrapper, ItemWrapper, Wrapper } from './styles';

interface Product {
  id: string;
  imageURL?: string;
  category: string;
  title: string;
  price: number;
}

const defaultProducts: Product[] = [
  {
    id: '5123',
    imageURL:
      'https://www.extra-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=887253487',
    category: 'NEW',
    title: 'Hotwheels Nissan 350z Preto',
    price: 9.99,
  },
  {
    id: '5134512',
    imageURL:
      'https://www.extra-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=887253487',
    category: 'NEW',
    title: 'Hotwheels Nissan 350z Preto',
    price: 9.99,
  },
  {
    id: '61123',
    imageURL:
      'https://images-na.ssl-images-amazon.com/images/I/61ZTdXGjRYL._AC_SY450_.jpg',
    category: 'ELECTRONICS',
    title: 'Teclado Mecânico Bright',
    price: 239.49,
  },
  {
    id: '5123',
    imageURL:
      'https://a-static.mlcdn.com.br/1500x1500/iphone-12-apple-128gb-azul-tela-61-cam-dupla-12mp-ios/magazineluiza/155598400/6b9b8ece04de165ab19587f5bd491df4.jpg',
    category: 'ELECTRONICS',
    title: 'iPhone 12 Apple 128GB Azul Tela 6,1',
    price: 4719.19,
  },
];

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
      {defaultProducts.map(({ category, title, id, imageURL, price }) => (
        <ItemWrapper>
          <ProductCard {...{ category, title, id, imageURL, price }} />
        </ItemWrapper>
      ))}
    </CarrouselWrapper>
  </Wrapper>
);

export default ProductCarrousel;
