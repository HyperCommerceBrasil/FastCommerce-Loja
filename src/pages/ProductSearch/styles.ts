import styled from 'styled-components';
import { Colors } from '../../utils';

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
