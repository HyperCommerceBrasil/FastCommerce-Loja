import React from 'react';
import {
  AddCart,
  AddCartWrapper,
  Category,
  FaShoppingCart,
  ImageWrapper,
  Img,
  InformationList,
  InformationWrapper,
  Price,
  Title,
  Wrapper,
} from './styles';

interface Product {
  name: string;
  price: number;
  collection: {
    id: string;
    name: string;
  };
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <Wrapper>
    <ImageWrapper>
      <Img />
    </ImageWrapper>
    <InformationWrapper>
      <InformationList>
        <Category>{product.collection.name}</Category>
        <Title>{product.name}</Title>
        <Price>{product.price}</Price>
      </InformationList>
      <AddCartWrapper>
        <AddCart>
          <FaShoppingCart size={20} />
        </AddCart>
      </AddCartWrapper>
    </InformationWrapper>
  </Wrapper>
);

export default ProductCard;
