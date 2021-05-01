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
          <HeaderTitle>Produtos</HeaderTitle>
          <ArrowWrapper isShowing={isCartShowing}>
            <HideArrow onClick={() => handleHideCart()} />
          </ArrowWrapper>
        </CartHeader>
        <CartItemsWrapper>
          {products.map(product => (
            <CartItem
              product={product}
              key={product.id}
              handleRemoveProduct={removeProduct}
            />
          ))}
        </CartItemsWrapper>
        <CartFooter>
          <FinalPrice>Preço total: {toLocalCurrency(totalPrice)}</FinalPrice>
        </CartFooter>
      </InternalWrapper>
    </Wrapper>
  );
};

export default Cart;
