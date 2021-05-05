import styled from 'styled-components';
import { Spacings, Breakpoints, Colors } from '../../utils';

const { insane, medium } = Spacings;
const { tablet, laptop, fhd } = Breakpoints;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${Colors.light?.environment.lighter};
`;

export const ProductListing = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 0 ${insane}px;

  @media (max-width: ${fhd}px) {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0;
  }
  @media (max-width: ${laptop}px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${tablet}px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NoProductFoundWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 420px;
  height: 100%;
  background-color: ${Colors.light?.environment.lighter};
  padding: 0 ${medium}px;
`;

export const NoProductFoundWrapperText = styled.h2`
  text-align: center;
  font-weight: 300;
  font-size: 2rem;
  color: ${Colors.light?.text.main};

  @media (max-width: ${tablet}px) {
    font-size: 1.4rem;
  }
`;
