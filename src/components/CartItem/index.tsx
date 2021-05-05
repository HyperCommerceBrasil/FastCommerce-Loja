import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { GlobalCartContext } from '../../contexts';
import { toLocalCurrency } from '../../utils';
import {
  Counter,
  DetailsWrapper,
  ProductImage,
  Name,
  Price,
  IoMdClose,
  TotalPrice,
  Wrapper,
  HeaderCartItem,
  DeleteWrapper,
  TextDeatilsWrapper,
  CounterWrapper,
  ImageWrapper,
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
        <ImageWrapper>
          <ProductImage
            src={product?.images[0].image}
            onClick={() => handleItemClick()}
          />
        </ImageWrapper>
        <TextDeatilsWrapper>
          <HeaderCartItem>
            <Name onClick={() => handleItemClick()}>
              {product?.name || 'Some name'}
            </Name>
            <DeleteWrapper>
              <IoMdClose
                color="#fff"
                size={30}
                onClick={() => handleRemoveProduct(product)}
              />
            </DeleteWrapper>
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
        </TextDeatilsWrapper>
      </DetailsWrapper>
      <TotalPrice>
        Total: {toLocalCurrency(product?.price * product.quantityOrdered)}
      </TotalPrice>
    </Wrapper>
  );
};

export default CartItem;
