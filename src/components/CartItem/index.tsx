import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { toLocalCurrency } from '../../utils';
import {
  DetailsWrapper,
  ProductImage,
  Name,
  Price,
  TotalPrice,
  Wrapper,
  HeaderCartItem,
  DeleteWrapper,
  TextDeatilsWrapper,
} from './styles';

type CartIconProps = {
  product: ProductOnCart;
  handleRemoveProduct?(product: ProductOnCart): void;
};
const CartItem: React.FC<CartIconProps> = ({
  product,
  handleRemoveProduct = () => ({}),
}) => (
  <Wrapper to={`/product/${product.id}`}>
    <DetailsWrapper>
      <ProductImage src={product?.images[0].image} />
      <TextDeatilsWrapper>
        <HeaderCartItem>
          <Name>{product?.name || 'Some name'}</Name>
        </HeaderCartItem>
        <Price>{toLocalCurrency(product?.price)}</Price>
        <TotalPrice>{toLocalCurrency(product?.price)}</TotalPrice>
      </TextDeatilsWrapper>
    </DetailsWrapper>
    <DeleteWrapper>
      <IoMdClose
        color="#fff"
        size={30}
        onClick={() => handleRemoveProduct(product)}
      />
    </DeleteWrapper>
  </Wrapper>
);

export default CartItem;
