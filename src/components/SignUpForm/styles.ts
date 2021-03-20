import styled from 'styled-components';
import { TextField as TextFieldBase } from '@material-ui/core';
import { Colors, Spacings } from '../../utils';

const { medium, giant } = Spacings;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${giant}px;
`;

export const Title = styled.h3``;

export const FormWrapper = styled.div``;

export const TextField = styled(TextFieldBase)`
  .MuiFormLabel-root.Mui-focused {
    color: ${Colors.light?.primary.main};
  }
  .MuiInput-underline:after {
    border-color: ${Colors.light?.primary.main};
  }
`;

export const SmallInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: ${medium}px ${medium}px ${medium}px 0;
`;

export const InputWrapper = styled.div`
  margin: ${medium}px 0;
  width: 100%;
`;

export const RowInputs = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: ${medium}px;
`;
