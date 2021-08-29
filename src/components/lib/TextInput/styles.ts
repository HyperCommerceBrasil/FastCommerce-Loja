import styled from 'styled-components';
import { Colors, Radius, Spacings } from '../../../utils';

const { short, meaningless, small, smaller } = Spacings;
const { smallRadius } = Radius;

type InputWrapperProps = {
  fullWidth?: boolean;
};

export const InputWrapper = styled.div<InputWrapperProps>`
  display: flex;
  flex-direction: column;
  margin: ${short}px 0;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
`;

export const TextFieldLabel = styled.h4`
  text-align: left;
  font-weight: 300;
  margin-bottom: ${meaningless}px;
  color: ${Colors.light?.text.main};
`;

export const TextField = styled.input`
  background-color: transparent;
  color: ${Colors.light?.text.main};
  padding: ${small}px ${short}px;
  border: 1px solid ${Colors.light?.text.main};
  border-radius: ${smallRadius}px;

  font-size: 1.2rem;

  transition: 0.3s;

  &:hover {
    border: 1px solid ${Colors.light?.primary.lighter};
  }

  &:focus {
    border: 1px solid ${Colors.light?.primary.main};
  }
`;

export const Error = styled.p`
  margin-top: ${smaller}px;
  color: ${Colors.light?.error};
  font-size: 0.8rem;
`;
