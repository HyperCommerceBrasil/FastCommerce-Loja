import styled from 'styled-components';
import { Colors, Spacings } from '../../../utils';

const { short, meaningless } = Spacings;

export const InputWrapper = styled.div`
  margin: ${short}px 0;
`;

export const TextFieldLabel = styled.h4`
  text-align: left;
  font-weight: 300;
  margin-bottom: ${meaningless}px;
  color: ${Colors.light?.text.main};
`;

export const TextField = styled.input``;

export const Error = styled.p``;
