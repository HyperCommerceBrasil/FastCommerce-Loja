import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Colors, toLocalCurrency } from '../../utils';
import {
  CartItems,
  CartValue,
  CartWrapper,
  ItemsCircle,
  Wrapper,
} from './styles';

type CartIconProps = {
  cartItems?: number;
  totalPrice?: number;
  cartColor?: string;
  circleItemsBackgroundColor?: string;
  priceColor?: string;
  circleItemsColor?: string;
};

const CartIcon: React.FC<CartIconProps> = ({
  cartItems = 0,
  totalPrice = 0,
  cartColor = Colors.light?.text.lighter,
  circleItemsBackgroundColor = Colors.light?.text.darker,
  circleItemsColor = Colors.light?.text.lighter,
  priceColor = Colors.light?.text.lighter,
}) => (
  <Wrapper>
    <CartWrapper>
      <FaShoppingCart color={cartColor} size={32} />
      <ItemsCircle backgroundColor={circleItemsBackgroundColor}>
        <CartItems color={circleItemsColor}>{cartItems}</CartItems>
      </ItemsCircle>
    </CartWrapper>
    <CartValue color={priceColor}>{toLocalCurrency(totalPrice)}</CartValue>
  </Wrapper>
);

export default CartIcon;
