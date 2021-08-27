import styled from 'styled-components';
import { IoMdClose as IoMdCloseBase } from 'react-icons/io';
import { Counter as CounterBase } from '..';
import { Colors, Spacings } from '../../utils';
import { IMAGE } from '../../utils/enums';

const { small, short, smaller } = Spacings;

type ProductImageProps = {
  src?: string;
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100px;
  padding: ${short}px 0;
  border-top: 1px solid ${Colors.light?.primary.main};
  text-decoration: none;

  transition: 0.4s;

  &:hover {
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: ${short}px;
`;

export const ProductImage = styled.div<ProductImageProps>`
  width: 100px;
  height: 100px;
  ${({ src = IMAGE.NOT_FOUND }) => `background-image: url(${src});`}
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-color: ${Colors.light?.text.lighter};
  border-radius: 16px;

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
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export const HeaderCartItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Name = styled.h3`
  color: ${Colors.light?.text.main};
  font-weight: 500;

  &:hover {
    cursor: pointer;
  }
`;

export const CounterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: ${small}px 0;
  border-radius: 10px;
`;

export const Counter = styled(CounterBase).attrs({
  counterValueSizeRem: 1,
  iconSize: 16,
})``;

export const Price = styled.h3`
  font-size: 1rem;
  font-weight: 300;
  color: ${Colors.light?.text.main};
`;

export const TotalPrice = styled.h3`
  text-align: right;
  background-color: ${Colors.light?.primary.main};
  border-radius: 8px;
  padding: ${smaller}px;
  margin-top: ${small}px;
  color: ${Colors.light?.text.lighter};
`;

export const DeleteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: ${small}px;

  &:hover {
    cursor: pointer;
  }
`;

export const IoMdClose = styled(IoMdCloseBase).attrs({
  color: Colors.light?.text.main,
})`
  &:hover {
    cursor: pointer;
  }
`;
