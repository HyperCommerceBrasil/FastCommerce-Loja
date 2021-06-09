import React, { useContext } from 'react';
import { GlobalCartContext } from '../../../contexts';
import { toLocalCurrency } from '../../../utils';
import { Wrapper } from './styles';

type Props = {
  text: string;
};

const CartOrderCard: React.FC<Props> = ({ text }) => {
  const DEFAULT_AMOUNT_ORDERED = 1;

  const { pushProduct } = useContext(GlobalCartContext);

  const handleAddToCart = (product: ProductOnCart) =>
    pushProduct({ product, amountOrdered: DEFAULT_AMOUNT_ORDERED });

  return <Wrapper>{text}</Wrapper>;
};

export default CartOrderCard;
