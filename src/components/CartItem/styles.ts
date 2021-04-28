import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors, Spacings } from '../../utils';
import { IMAGE } from '../../utils/enums';

const { small, short } = Spacings;

type ProductImageProps = {
  src?: string;
};

export const Wrapper = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: ${small}px;
  margin: ${short}px 0;
  border-radius: 16px;
  background-color: ${Colors.light?.primary.main};
  text-decoration: none;
`;

export const ProductImage = styled.div<ProductImageProps>`
  display: flex;
  max-width: 100px;
  width: 100%;
  height: 100%;
  ${({ src = IMAGE.NOT_FOUND }) => `background-image: url(${src});`}
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-color: ${Colors.light?.text.lighter};
  border-radius: 16px;
`;

export const DetailsWrapper = styled.div``;

export const Name = styled.h3`
  color: ${Colors.light?.text.lighter};
`;

export const Price = styled.h3`
  color: ${Colors.light?.text.lighter};
`;

export const TotalPrice = styled.h2`
  color: ${Colors.light?.text.lighter};
`;
