import styled from 'styled-components';
import { Spacings } from '../../utils';

const { medium } = Spacings;

export const Wrapper = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: wrap;
`;

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const CarrouselWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: ${medium}px;
`;
