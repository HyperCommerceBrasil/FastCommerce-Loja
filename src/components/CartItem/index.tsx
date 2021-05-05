import React, { useContext } from 'react';
import { IoMdClose } from 'react-icons/io';
import { useHistory } from 'react-router';
import { GlobalCartContext } from '../../contexts';
import { toLocalCurrency } from '../../utils';
import {
  Counter,
  DetailsWrapper,
  ProductImage,
  Name,
  Price,
  TotalPrice,
  Wrapper,
  HeaderCartItem,
  DeleteWrapper,
  TextDeatilsWrapper,
  CounterWrapper,
} from './styles';

type CartIconProps = {
  product: ProductOnCart;
  handleRemoveProduct?(product: ProductOnCart): void;
};

const CartItem: React.FC<CartIconProps> = ({
  product,
  handleRemoveProduct = () => ({}),
}) => {
  const { push } = useHistory();
  const {
    setIsCartShowing,
    handlePlusProductQuantityOrdered,
    handleMinusProductQuantityOrdered,
  } = useContext(GlobalCartContext);

  const handleItemClick = () => {
    push(`/product/${product.id}`);
    setTimeout(() => setIsCartShowing(), 50);
  };

  return (
    <Wrapper>
      <DetailsWrapper>
        <ProductImage
          src={product?.images[0].image}
          onClick={() => handleItemClick()}
        />
        <TextDeatilsWrapper>
          <HeaderCartItem>
            <Name onClick={() => handleItemClick()}>
              {product?.name || 'Some name'}
            </Name>
          </HeaderCartItem>
          <CounterWrapper>
            <Counter
              counterValue={product.quantityOrdered || 0}
              setCounterValueMinus={() =>
                handleMinusProductQuantityOrdered(product.id)
              }
              setCounterValuePlus={() =>
                handlePlusProductQuantityOrdered(product.id)
              }
            />
            <Price>x {toLocalCurrency(product?.price)}</Price>
          </CounterWrapper>
          <TotalPrice>
            {toLocalCurrency(product?.price * product.quantityOrdered)}
          </TotalPrice>
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
};

export default CartItem;
