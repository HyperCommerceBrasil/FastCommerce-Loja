import styled from 'styled-components';
import { Colors, Spacings } from '../../utils';

const { big } = Spacings;

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${Colors.light?.environment.lighter};
`;

export const InternWrapper = styled.div`
  display: flex;
  padding: ${big}px;
  /* flex-direction: column; */
  background-color: ${Colors.light?.environment.lighter};
`;

export const DrawerSelectedWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  min-height: 60vh;
`;

export const AddressComponentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
