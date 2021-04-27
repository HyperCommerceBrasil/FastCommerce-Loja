import React from 'react';
import { success, toLocalCurrency } from '../../utils';
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
  imageURL?: ProductImage[];
  collectionName: string;
  name: string;
  price: number;
  quantity?: number;
};

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  imageURL = [],
  collectionName,
  name,
  price,
}) => {
  const handleAddToCart = (id: string) => {
    console.log(id);
    success('Adicionado ao carrinho! 🛒');
  };

  return (
    <Wrapper>
      <ImageWrapper to={`/product/${id}`}>
        <Img imageURL={imageURL[0]?.image} />
      </ImageWrapper>
      <InformationWrapper>
        <InformationList to={`/product/${id}`}>
          <Category>{collectionName}</Category>
          <Title>{name}</Title>
          <Price>{toLocalCurrency(price)}</Price>
        </InformationList>

        <AddCartWrapper>
          <AddCart onClick={() => handleAddToCart(id)}>
            <FaShoppingCart size={20} />
          </AddCart>
        </AddCartWrapper>
      </InformationWrapper>
    </Wrapper>
  );
};

export default ProductCard;
