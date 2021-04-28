import React from 'react';
import { toLocalCurrency } from '../../utils';
import {
  DetailsWrapper,
  ProductImage,
  Name,
  Price,
  TotalPrice,
  Wrapper,
} from './styles';

type CartIconProps = {
  product: ProductOnCart;
};
const CartItem: React.FC<CartIconProps> = ({ product }) => {
  return (
    <Wrapper to={`/product/${product.id}`}>
      <ProductImage src={product?.images[0].image} />
      <DetailsWrapper>
        <Name>{product?.name || 'Some name'}</Name>
        <Price>{toLocalCurrency(product?.price || 551.61)}</Price>
      </DetailsWrapper>
      <TotalPrice>{toLocalCurrency(product?.price) || 'R$551.51'}</TotalPrice>
    </Wrapper>
  );
};

export default CartItem;
