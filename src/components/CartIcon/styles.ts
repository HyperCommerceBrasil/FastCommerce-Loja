import styled from 'styled-components';
import { Colors, Spacings } from '../../utils';

const { small, large } = Spacings;
const ballSize = 16;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const CartWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ItemsCircle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: ${ballSize}px;
  min-height: ${ballSize}px;
  position: absolute;
  margin-top: -${small}px;
  margin-left: ${large}px;
  background-color: ${Colors.light?.text.darker};
  border-radius: ${ballSize}px;
  padding: 2px;
`;

export const CartItems = styled.p`
  font-size: 0.9rem;
  color: ${Colors.light?.text.lighter};
`;

export const CartValue = styled.p`
  margin-left: ${large}px;
`;
