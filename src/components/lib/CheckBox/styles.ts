import styled from 'styled-components';
import { Checkbox as CheckboxBase } from '@material-ui/core';
import { Colors, Spacings } from '../../../utils';

const { short, meaningless, smaller } = Spacings;

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

export const Checkbox = styled(CheckboxBase)`
  .MuiSvgIcon-root {
    color: ${Colors.light?.primary.main};
  }
`;

export const Error = styled.p`
  margin-top: ${smaller}px;
  color: ${Colors.light?.error};
  font-size: 0.8rem;
`;
