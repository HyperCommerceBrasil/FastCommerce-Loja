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
  Wrapper,
} from './styles';

// type ProductCardProps = {
//   id: string;
//   imageURL?: ProductImage[];
//   collectionName: string;
//   name: string;
//   price: number;
//   quantity?: number;
// };

const Cart: React.FC = () => {
  const { isCartShowing, setIsCartShowing, products, totalPrice } = useContext(
    GlobalCartContext,
  );

  const handleHideCart = () => setIsCartShowing();

  return (
    <Wrapper isShowing={isCartShowing}>
      <CartHeader>
        <ArrowWrapper isShowing={isCartShowing}>
          <HideArrow onClick={() => handleHideCart()} />
        </ArrowWrapper>
        <HeaderTitle>Produtos</HeaderTitle>
      </CartHeader>
      <CartItemsWrapper>
        {products.map(product => (
          <CartItem product={product} key={product.id} />
        ))}
      </CartItemsWrapper>
      <CartFooter>
        <FinalPrice>{toLocalCurrency(totalPrice)}</FinalPrice>
      </CartFooter>
    </Wrapper>
  );
};

export default Cart;
