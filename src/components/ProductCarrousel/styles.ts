import styled from 'styled-components';
import { Colors, Spacings } from '../../utils';

const { medium } = Spacings;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CarrouselWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 360px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: ${medium}px;
`;
