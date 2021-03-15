import styled from 'styled-components';
import { Colors } from '../../utils';

export const ThemedButton = styled.button`
  border: none;
  padding: 20px;
  background-color: ${Colors.light?.primary.main};
  border-radius: 5px;
`;

export const ButtonText = styled.p`
  font-weight: 700;
  font-size: 1.4rem;
  color: ${Colors.light?.text.lighter};
`;
