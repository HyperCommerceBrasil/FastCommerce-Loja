import styled from 'styled-components';
import { Breakpoints, Colors, Spacings } from '../../utils';

const { big } = Spacings;
const { tablet } = Breakpoints;

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${Colors.light?.environment.lighter};
`;

export const InternWrapper = styled.div`
  display: flex;
  padding: ${big}px;
  background-color: ${Colors.light?.environment.lighter};

  @media (max-width: ${tablet}px) {
    padding: 0;
    /* align-items: center; */
    flex-direction: column;
  }
`;

export const DrawerWrapper = styled.div`
  display: flex;

  @media (max-width: ${tablet}px) {
    align-items: center;
  }
`;

export const DrawerSelectedWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  min-height: 60vh;
  /* background-color: #f13; */

  @media (max-width: ${tablet}px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const AddressComponentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
