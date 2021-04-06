import styled from 'styled-components';
import { Spacings, Breakpoints } from '../../utils';

const { insane } = Spacings;
const { tablet, laptop, fhd } = Breakpoints;

// const defaultImageNoProductsFound =
//   'https://www.navigation.com/static/WFS/Shop-Site/-/Shop/en_US/Product%20Not%20Found.png';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductListingWrapper = styled.div`
  display: flex;
  justify-content: center;
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
