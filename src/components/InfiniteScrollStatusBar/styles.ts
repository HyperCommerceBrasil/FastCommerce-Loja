import styled from 'styled-components';
import { Colors } from '../../utils';

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: ${Colors.light?.environment.lighter};
`;

export const StatusMessage = styled.h3`
  color: ${Colors.light?.text.main};
`;
