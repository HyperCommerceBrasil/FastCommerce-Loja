import React, { useContext } from 'react';
import { GlobalCartContext } from '../../contexts';
import { toLocalCurrency } from '../../utils';
import CartItem from '../CartItem';
import {
  ArrowWrapper,
  CartFooter,
  CartHeader,
  CartItemsWrapper,
  FinalPrice,
  HeaderTitle,
  HideArrow,
  InternalWrapper,
  ScrollableVertical,
  ShippingWrapper,
  Wrapper,
} from './styles';

const Cart: React.FC = () => {
  const {
    isCartShowing,
    setIsCartShowing,
    products,
    totalPrice,
    removeProduct,
  } = useContext(GlobalCartContext);

  const handleHideCart = () => setIsCartShowing();

  return (
    <Wrapper isShowing={isCartShowing}>
      <InternalWrapper>
        <CartHeader>
          <HeaderTitle>Carrinho</HeaderTitle>
          <ArrowWrapper isShowing={isCartShowing}>
            <HideArrow onClick={() => handleHideCart()} />
          </ArrowWrapper>
        </CartHeader>
        <ScrollableVertical>
          <CartItemsWrapper>
            {products.map(product => (
              <CartItem
                product={product}
                key={product.id}
                handleRemoveProduct={removeProduct}
              />
            ))}
          </CartItemsWrapper>
          <ShippingWrapper>
            {/* <ShippingPriceWrapper>
              <ShippingDescription></ShippingDescription>
              <ShippingPrice>{toLocalCurrency(20)}</ShippingPrice>
            </ShippingPriceWrapper> */}
          </ShippingWrapper>
        </ScrollableVertical>
        <CartFooter>
          <FinalPrice>Valor total</FinalPrice>
          <FinalPrice>{toLocalCurrency(totalPrice)}</FinalPrice>
        </CartFooter>
      </InternalWrapper>
    </Wrapper>
  );
};

export default Cart;
