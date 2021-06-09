import styled from 'styled-components';
import { Colors } from '../../utils';

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${Colors.light?.environment.lighter};
`;

export const InternWrapper = styled.div`
  display: flex;
  min-height: 60vh;
  flex: 1;
  flex-direction: column;
  background-color: ${Colors.light?.environment.lighter};
`;

export const DrawerSelectedWrapper = styled.div`
  display: flex;
`;
