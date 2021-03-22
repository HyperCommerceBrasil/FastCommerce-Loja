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
  imageURL?: string[];
  collectionName: string;
  name: string;
  price: number;
  quantity: number;
};

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  imageURL = [],
  collectionName,
  name,
  price,
}) => (
  <Wrapper>
    <ImageWrapper to={`product&id=${id}`}>
      <Img imageURL={imageURL[0]} />
    </ImageWrapper>
    <InformationWrapper>
      <InformationList to={`product&id=${id}`}>
        <Category>{collectionName}</Category>
        <Title>{name}</Title>
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
