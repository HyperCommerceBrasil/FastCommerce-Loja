import React from 'react';
import { success } from '../../utils';
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

type ProductCardProps = {
  id: string;
  imageURL?: string;
  category: string;
  title: string;
  price: number;
};

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  imageURL,
  category,
  title,
  price,
}) => (
  <Wrapper>
    <ImageWrapper to={`product&id=${id}`}>
      <Img imageURL={imageURL} />
    </ImageWrapper>
    <InformationWrapper>
      <InformationList to={`product&id=${id}`}>
        <Category>{category}</Category>
        <Title>{title}</Title>
        <Price>{`R$${price}`}</Price>
      </InformationList>
      <AddCartWrapper>
        <AddCart onClick={() => success('Adicionado ao carrinho! 🛒')}>
          <FaShoppingCart size={20} />
        </AddCart>
      </AddCartWrapper>
    </InformationWrapper>
  </Wrapper>
);

export default ProductCard;
