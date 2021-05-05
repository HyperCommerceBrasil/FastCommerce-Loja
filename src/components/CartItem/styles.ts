import styled from 'styled-components';
import { Counter as CounterBase } from '..';
import { Colors, Spacings } from '../../utils';
import { IMAGE } from '../../utils/enums';

const { small, short } = Spacings;

type ProductImageProps = {
  src?: string;
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100px;
  padding: ${small}px;
  margin: ${short}px 0;
  border-radius: 16px;
  background-color: ${Colors.light?.primary.main};
  text-decoration: none;

  transition: 0.4s;

  &:hover {
    background-color: ${Colors.light?.primary.dark};
  }
`;

export const ProductImage = styled.div<ProductImageProps>`
  max-width: 100px;
  width: 100%;
  height: 100%;
  ${({ src = IMAGE.NOT_FOUND }) => `background-image: url(${src});`}
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-color: ${Colors.light?.text.lighter};
  border-radius: 16px;
  margin-right: ${short}px;

  &:hover {
    cursor: pointer;
  }
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

export const TextDeatilsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const HeaderCartItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Name = styled.h3`
  color: ${Colors.light?.text.lighter};

  &:hover {
    cursor: pointer;
  }
`;

export const CounterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin: ${small}px 0;
  border-radius: 10px;
`;

export const Counter = styled(CounterBase).attrs({
  counterValueSizeRem: 1,
  iconSize: 20,
})``;

export const Price = styled.h3`
  font-size: 1rem;
  color: ${Colors.light?.text.lighter};
`;

export const TotalPrice = styled.h2`
  color: ${Colors.light?.text.lighter};
`;

export const DeleteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: ${small}px;
`;
