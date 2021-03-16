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

const ProductCard: React.FC = () => (
  <Wrapper>
    <ImageWrapper>
      <Img />
    </ImageWrapper>
    <InformationWrapper>
      <InformationList>
        <Category>Eletrônicos</Category>
        <Title>Redmi Air Dots 2</Title>
        <Price>R$ 150,00</Price>
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
