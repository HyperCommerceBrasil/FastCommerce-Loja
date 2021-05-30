import React, { useContext, useState } from 'react';
import { GlobalCartContext } from '../../contexts';
import { toLocalCurrency } from '../../utils';
import CartItem from '../CartItem';
import {
  ArrowWrapper,
  CartInfoitemWrapper,
  CartHeader,
  CartItemsWrapper,
  FinalPrice,
  HeaderTitle,
  HideArrow,
  InternalWrapper,
  ScrollableVertical,
  ShippingDescription,
  ShippingPrice,
  ShippingPriceWrapper,
  BorderlineCartInfoitemWrapper,
  Wrapper,
  ZipCodeInput,
  BuyText,
  FinalPriceWrapper,
} from './styles';

const Cart: React.FC = () => {
  const [zipCode, setZipCode] = useState('');
  const {
    isCartShowing,
    setIsCartShowing,
    products,
    totalPrice,
    removeProduct,
  } = useContext(GlobalCartContext);

  const CEP_LENGTH = 8;

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
        </ScrollableVertical>
        <BorderlineCartInfoitemWrapper>
          <ShippingPriceWrapper>
            <ShippingDescription>Frete</ShippingDescription>
            <ZipCodeInput
              maxLength={CEP_LENGTH}
              inputMode="numeric"
              value={zipCode}
              onChange={({ target }) => setZipCode(target.value)}
              placeholder="Insira o seu CEP"
            />
            <ShippingPrice>{toLocalCurrency(20)}</ShippingPrice>
          </ShippingPriceWrapper>
        </BorderlineCartInfoitemWrapper>
        <BorderlineCartInfoitemWrapper>
          <FinalPriceWrapper>
            <FinalPrice>Total:</FinalPrice>
            <FinalPrice>{toLocalCurrency(totalPrice)}</FinalPrice>
          </FinalPriceWrapper>
        </BorderlineCartInfoitemWrapper>
        <CartInfoitemWrapper>
          <BuyText>Comprar</BuyText>
        </CartInfoitemWrapper>
      </InternalWrapper>
    </Wrapper>
  );
};

export default Cart;
