import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import {
  CartItems,
  CartValue,
  CartWrapper,
  ItemsCircle,
  Wrapper,
} from './styles';

const CartIcon: React.FC = () => (
  <Wrapper>
    <CartWrapper>
      <FaShoppingCart size={32} />
      <ItemsCircle>
        <CartItems>2</CartItems>
      </ItemsCircle>
    </CartWrapper>
    <CartValue>R$61,71</CartValue>
  </Wrapper>
);

export default CartIcon;
