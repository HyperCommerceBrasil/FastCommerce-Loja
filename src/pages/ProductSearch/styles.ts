import styled from 'styled-components';
import { Colors, Spacings } from '../../utils';

const { huge, short } = Spacings;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.light?.environment.lighter};
`;

export const ProductsCarrousel = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  padding: ${huge}px;
`;

export const SearchInputWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  margin: ${short}px 0;
`;
